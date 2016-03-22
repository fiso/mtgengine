"use strict";
const Player = require("./Player");
const Constants = require("./Constants");
const GameActions = require("./GameActions");
const Inputs = require("./Inputs");
const Outputs = require("./Outputs");
const _ = require("underscore");
const Battlefield = require("./zones/Battlefield");
const Stack = require("./zones/Stack");
const assert = require("assert");

class GameOver {
  constructor (winner) {
    this.winner = winner;
  }
}

class Game {
  constructor (numberOfPlayers, startingPlayerIndex, silenceLogging) {
    this._turnNumber = 0;
    this._players = [];
    this._currentStep = -1;
    this._hasPriority = null;
    this._activePlayer = null;
    this._battlefield = new Battlefield(this);
    this._stack = new Stack(this);
    this._guidCounters = {};
    this._outputs = [];
    this._silenceLogging = silenceLogging;
    this._waitingForChoice = false;
    this._playerMakingChoice = null;

    this._actionListeners = {};

    for (let i = 0; i < numberOfPlayers; i++) {
      let player = new Player(this);
      this._players.push(player);
    }

    this._activePlayer = this._players[startingPlayerIndex];

    this.log(">>>>>>>>>>>>>> GAME STARTING <<<<<<<<<<<<<<")
    this._players.forEach(player => {
      player.onNewTurn(player === this._activePlayer);
    });
    this.advanceToNextStep();
  }

  log (str) {
    if (this._silenceLogging) {
      return;
    }

    console.log(str);
  }

  logCurrentGameTime () {
    this.log("== It is now the " + Constants.stepNames[this._currentStep] + " step ==");
  }

  getGuid (prefix) {
    prefix = prefix || "o";
    prefix += "_"
    if (!this._guidCounters[prefix]) {
      this._guidCounters[prefix] = 0;
    }

    return prefix + String(this._guidCounters[prefix]++);
  }

  resetProrityPassers () {
    this._priorityPassers = [];
  }

  requireChoice (player) {
    assert(!this._waitingForChoice);
    this.log("---- Pausing for choice ----");
    this._waitingForChoice = true;
    this._playerMakingChoice = player;
  }

  finishChoice (player) {
    assert(this._waitingForChoice);
    this.log("---- Finishing choice ----");
    this._waitingForChoice = false;
    this._playerMakingChoice = null;

    switch (this._currentStep) {
      case Constants.steps.DECLARE_ATTACKERS:
        this.finishDeclareAttackers();
        break;
    }
  }

  finishDeclareAttackers () {
    let permanents = this._battlefield.getPermanentsControlledByPlayer(this._activePlayer);
    this.log("--> Locking in attackers");
    permanents.forEach(permanent => {
      if (permanent.isCreature() && permanent.attacking) {
        permanent.tap();
      }
    });
  }

  passPriority (player) {
    this._priorityPassers.push(player._guid);

    let allPassed = true;
    this._players.forEach(player => {
      if (this._priorityPassers.indexOf(player._guid) === -1) {
        allPassed = false;
      }
    });

    if (allPassed) {
      this.handleAllPassed();
    } else {
      this.givePriorityToNextPlayer();
    }
  }

  handleAllPassed () {
    this.log("All players passed priority");

    if (this._stack.empty()) {
      this.advanceToNextStep();
    } else {
      this._stack.resolveTopObject();
      this.resetProrityPassers();
      this.setPriority(this._activePlayer);
      this.log("OBJECT RESOLVED");
    }
  }

  passOrFinishChoice () {
    let player = this._hasPriority;
    if (this._waitingForChoice) {
      player.addInput(Inputs.FINISH_CHOICE, {});
    } else {
      player.addInput(Inputs.PASS_PRIORITY, {});
    }
  }

  advanceToNextStep () {
    assert(!this._waitingForChoice);
    this.resetProrityPassers();
    this._players.forEach(player => {
      player.emptyManaPool();
    });
    if (this._currentStep < Constants.steps.CLEANUP) {
      if (this._turnNumber === 0 && this._currentStep === Constants.steps.UPKEEP) {
        this._currentStep = Constants.steps.MAIN1; // Skip draw step on first turn
      } else {
        this._currentStep++;
      }
    } else {
      this._turnNumber++;
      this.log("\n>>>>>>>>>>>>>> TURN " + this._turnNumber + " <<<<<<<<<<<<<<")
      this._activePlayer = this.getNextPlayer(this._activePlayer);
      this._currentStep = Constants.steps.UNTAP;
      this._players.forEach(player => {
        player.onNewTurn(player === this._activePlayer);
      });
    }
    this.setPriority(this._activePlayer);

    this.logCurrentGameTime();
    this.addOutput(Outputs.NEW_GAME_TIME, {
      turnNumber: this._turnNumber,
      stepNumber: this._currentStep,
      stepName: Constants.stepNames[this._currentStep],
      activePlayer: this._activePlayer
    });

    this.performTurnbasedActions();

    if (!this._waitingForChoice) {
      while (this.performStateBasedActions() > 0) {
      }

      if (!this.playersShouldReceivePriority(this._currentStep)) {
        this.advanceToNextStep();
      }
    }
  }

  getNextPlayer (currentPlayer) {
    let isNext = false;
    let nextPlayer = null;
    this._players.forEach(player => {
      if (isNext && !nextPlayer) {
        nextPlayer = player;
      } else if (currentPlayer === player) {
        isNext = true;
      }
    });

    if (!nextPlayer) {
      nextPlayer = this._players[0];
    }

    return nextPlayer;
  }

  setPriority (player) {
    this._hasPriority = player;
    this.addOutput(Outputs.PRIORITY_CHANGED, {
      player: this._hasPriority
    });
  }

  givePriorityToNextPlayer () {
    let playerReceivingPriority = this.getNextPlayer(this._hasPriority);
    this.setPriority(playerReceivingPriority);
  }

  /**
   * @returns {number} Number of actions taken
   */
  performStateBasedActions () {

    let playersStillInGame = [];
    this._players.forEach(player => {
      if (!player.hasLost()) {
        playersStillInGame.push(player);
      }
    });

    if (playersStillInGame.length === 1) {
      this.handleGameWon(playersStillInGame[0]);
    } else if (playersStillInGame.length === 0) {
      this.handleGameDrawn();
    }

    let actionsPerformed = 0;
    actionsPerformed += this._battlefield.performStateBasedActions();

    return actionsPerformed;
  }

  performTurnbasedActions () {
    switch (this._currentStep) {
      case Constants.steps.DECLARE_ATTACKERS:
        this.requireChoice(this._activePlayer);
        break;
      case Constants.steps.DECLARE_BLOCKERS:
        this.givePriorityToNextPlayer();
        this.requireChoice(this.getNextPlayer(this._activePlayer));
        break;
    }

    this._players.forEach(player => {
      player.performTurnbasedActions(
        this._currentStep,
        player === this._activePlayer);
    });

    if (this._currentStep === Constants.steps.CLEANUP) {
      while (this._battlefield.onCleanup() !== 0) {
      }
    }
  }

  handleGameWon (winner) {
    this.log(winner._guid + " has won the game!");
    throw new GameOver(winner);
  }

  handleGameDrawn () {
    this.log("The game is a draw!");
    throw new GameOver(null);
  }

  playersShouldReceivePriority (step) {
    if ([Constants.steps.UNTAP, Constants.steps.CLEANUP].indexOf(step) === -1) {
      return true;
    }

    return false;
  }

  tick () {
    if (this.playersShouldReceivePriority(this._currentStep)) {
      let input = this._hasPriority.getInput();
      if (input) {
        this.handleInput(this._hasPriority, input.input, input.data);
      } 
    }
  }

  isWaitingForInput () {
    if (this.playersShouldReceivePriority(this._currentStep)) {
      return !this._hasPriority.hasUnprocessedInputs();
    }

    return false;
  }

  /**
   * Handles incoming input from players
   */
  handleInput (player, input, data) {
    while (this.performStateBasedActions() > 0) {
    }

    this.log(">> " + player._guid + " " + input);
    switch(input) {
      case Inputs.PASS_PRIORITY:
        this.passPriority(player);
        break;
      case Inputs.FINISH_CHOICE:
        this.finishChoice(player);
        break;
      case Inputs.CONCEDE:
        player.concede();
        while (this.performStateBasedActions() > 0) {
        }
        break;
      case Inputs.PLAY_LAND:
        player.putLandIntoPlay(data.landCard, true);
        break;

      case Inputs.ACTIVATE_ABILITY:
        player.activateAbility(data.object, data.abilityIndex);
        break;
      case Inputs.CAST_SPELL:
        player.castSpell(data.card, data.targets);
        break;

      case Inputs.ABORT_SPELLCAST:
        player.abortSpellCast(data.spell);
        break;
    }
  }

  registerActionListener (listener, gameAction) {
    if (!this._actionListeners[gameAction]) {
      this._actionListeners[gameAction] = [];
    }

    this._actionListeners[gameAction].push(listener);
  }

  /**
   * Attempt to perform an action that affects the game state.
   * This may or may not actually allow the action to happen, as we first check for
   * any replacement effects to be applied.
   * @returns {Boolean} True if the action may happen as intended, false if it will be replaced
   */
  performGameAction (gameAction, data) {
    if (!this._actionListeners[gameAction]) {
      return true;
    }

    this._actionListeners[gameAction].forEach(listener => {
      listener.onGameAction(gameAction, data);
    });

    // FIXME: Handle multiple replacement effects properly

    return false
  }

  /**
   * Sends output from the game to the visualization
   */
  addOutput (output, data) {
    this._outputs.push({
      output: output,
      data: data
    });
  }

  getOutputs () {
    let ret = this._outputs;
    this._outputs = [];
    return ret;
  }
}

module.exports = {
  Game: Game,
  GameOver: GameOver
};
