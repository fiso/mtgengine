'use strict';
const Player = require('./Player');
const Constants = require('./Constants');
const Inputs = require('./Inputs');
const Outputs = require('./Outputs');
const Battlefield = require('./zones/Battlefield');
const Stack = require('./zones/Stack');
const Scryfall = require('./apis/Scryfall');
const assert = require('assert');

class GameOver {
  constructor (winner) {
    this.winner = winner;
  }
}

class Game {
  constructor ( numberOfPlayers,
                startingPlayerIndex,
                silenceLogging,
                decks, cardApi) {
    this._cardApi = cardApi || new Scryfall();
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
    this._numberOfPlayers = numberOfPlayers;
    this._startingPlayerIndex = startingPlayerIndex;
    this._decks = decks;

    this._actionListeners = {};
  }

  log (str) {
    if (this._silenceLogging) {
      return;
    }

    console.log(str);
  }

  getStepName (step) {
    for (const stepName in Constants.steps) {
      if (Constants.steps[stepName] === step) {
        return stepName;
      }
    }
    return '';
  }

  logCurrentGameTime () {
    this.log(`== It is now the ${this.getStepName(this._currentStep)} step ==`);
  }

  ready () {
    return new Promise((resolve, reject) => {
      const deckPromises = [];
      for (const deck of this._decks) {
        deckPromises.push(deck.ready());
      }
      Promise.all(deckPromises).then(() => {
        const playerPromises = [];
        for (let i = 0; i < this._numberOfPlayers; i++) {
          const promise = new Promise((resolve, reject) => {
              const player = new Player(this, this._decks[i]);
              this._players.push(player);
              player.ready().then(() => {
                resolve();
              });
          });
          playerPromises.push(promise);
        }

        Promise.all(playerPromises).then(() => {
          this.startGame();
          resolve();
        });
      });
    });
  }

  startGame () {
    this._activePlayer = this._players[this._startingPlayerIndex];
    this.log('>>>>>>>>>>>>>> GAME STARTING <<<<<<<<<<<<<<');

    for (const player of this._players) {
      for (let i = 0; i < 7; i++) {
        player.drawCard();
      }
    }

    for (const player of this._players) {
      player.onNewTurn(player === this._activePlayer);
    }

    this.advanceToNextStep();
  }

  getGuid (prefix) {
    prefix = prefix || 'o';
    prefix += '_';
    if (!this._guidCounters[prefix]) {
      this._guidCounters[prefix] = 0;
    }

    return prefix + String(this._guidCounters[prefix]++);
  }

  resetProrityPassers () {
    this._priorityPassers = [];
  }

  requireChoice (player, choices) {
    assert(!this._waitingForChoice);
    this.log('---- Pausing for choice ----');
    this._waitingForChoice = true;
    this._playerMakingChoice = player;
    this._possibleChoices = choices;
    return new Promise((resolve) => {
      this._resolveChoiceCallback = resolve;
    });
  }

  finishChoice (choice) {
    assert(this._waitingForChoice);
    this.log('---- Finishing choice ----');
    this._waitingForChoice = false;
    this._playerMakingChoice = null;
    this._resolveChoiceCallback(choice);
  }

  finishDeclareAttackers () {
    const permanents = this._battlefield.getPermanentsControlledByPlayer(
      this._activePlayer);
    this.log('--> Locking in attackers');
    for (const permanent of permanents) {
      if (permanent.isCreature() &&
          permanent.attacking &&
          !permanent.hasKeywordAbility(Constants.keywordAbilities.VIGILANCE)) {
        permanent.tap();
        permanent.resetBlockers();
      }
    }
  }

  finishDeclareBlockers () {
    this.log('--> Locking in blockers');
    this.setPriority(this._activePlayer);
  }

  passPriority (player) {
    this._priorityPassers.push(player._guid);

    let allPassed = true;
    for (const player of this._players) {
      if (this._priorityPassers.indexOf(player._guid) === -1) {
        allPassed = false;
      }
    }

    if (allPassed) {
      this.handleAllPassed();
    } else {
      this.givePriorityToNextPlayer();
    }
  }

  handleAllPassed () {
    this.log('All players passed priority');

    if (this._stack.empty()) {
      this.advanceToNextStep();
    } else {
      this._stack.resolveTopObject();
      this.resetProrityPassers();
      this.setPriority(this._activePlayer);
      this.log('OBJECT RESOLVED');
    }
  }

  passOrFinishChoice () {
    const player = this._hasPriority;
    if (this._waitingForChoice) {
      debugger; // This must be removed
      player.addInput(Inputs.FINISH_CHOICE, {});
    } else {
      player.addInput(Inputs.PASS_PRIORITY, {});
    }
  }

  advanceToNextStep () {
    assert(!this._waitingForChoice);
    this.resetProrityPassers();
    for (const player of this._players) {
      player.emptyManaPool();
    }
    if (this._currentStep < Constants.steps.CLEANUP) {
      if (this._turnNumber === 0 &&
        this._currentStep === Constants.steps.UPKEEP) {
        // Skip draw step on first turn
        this._currentStep = Constants.steps.MAIN1;
      } else {
        this._currentStep++;
      }
    } else {
      this._turnNumber++;
      this.log(`\n>>>>>>>>>>>>>> TURN ${this._turnNumber} <<<<<<<<<<<<<<`);
      this._activePlayer = this.getNextPlayer(this._activePlayer);
      this._currentStep = Constants.steps.UNTAP;
      for (const player of this._players) {
        player.onNewTurn(player === this._activePlayer);
      }
    }
    this.setPriority(this._activePlayer);

    this.logCurrentGameTime();
    this.addOutput(Outputs.NEW_GAME_TIME, {
      turnNumber: this._turnNumber,
      stepNumber: this._currentStep,
      stepName: this.getStepName(this._currentStep),
      activePlayer: this._activePlayer,
    });

    this.performTurnbasedActions();

    if (!this._waitingForChoice) {
      this.performAllStateBasedActions();

      if (!this.playersShouldReceivePriority(this._currentStep)) {
        this.advanceToNextStep();
      }
    }
  }

  getNextPlayer (currentPlayer) {
    let isNext = false;
    let nextPlayer = null;
    for (const player of this._players) {
      if (isNext && !nextPlayer) {
        nextPlayer = player;
      } else if (currentPlayer === player) {
        isNext = true;
      }
    }

    if (!nextPlayer) {
      nextPlayer = this._players[0];
    }

    return nextPlayer;
  }

  setPriority (player) {
    this._hasPriority = player;
    this.addOutput(Outputs.PRIORITY_CHANGED, {
      player: this._hasPriority,
    });
  }

  givePriorityToNextPlayer () {
    const playerReceivingPriority = this.getNextPlayer(this._hasPriority);
    this.setPriority(playerReceivingPriority);
  }

  /**
   * @return {number} Number of actions taken
   */
  performStateBasedActions () {
    this.log('::::: CHECKING STATE BASED ACTIONS :::::');

    const playersStillInGame = [];
    for (const player of this._players) {
      if (!player.hasLost()) {
        playersStillInGame.push(player);
      }
    }

    if (playersStillInGame.length === 1) {
      this.handleGameWon(playersStillInGame[0]);
    } else if (playersStillInGame.length === 0) {
      this.handleGameDrawn();
    }

    let actionsPerformed = 0;
    actionsPerformed += this._battlefield.performStateBasedActions();

    return actionsPerformed;
  }

  performAllStateBasedActions () {
    let nActions = 0;
    do {
      nActions = this.performStateBasedActions();
    } while (nActions > 0);
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
      case Constants.steps.COMBAT_DAMAGE:
        this.log('XXXX DEALING DAMAGE XXXX');
        this._battlefield.dealCombatDamage();
        break;
      case Constants.steps.MAIN2:
        // This is not actually a turn-based action that exists, but
        // I believe it will work as intended this way
        this._battlefield.resetAttackersAndBlockers();
        break;
      default:
        break;
    }

    for (const player of this._players) {
      player.performTurnbasedActions(
        this._currentStep,
        player === this._activePlayer);
    }

    if (this._currentStep === Constants.steps.CLEANUP) {
      let nActions = 0;
      do {
        nActions = this._battlefield.onCleanup();
      } while (nActions > 0);
    }
  }

  handleGameWon (winner) {
    this.log(`${winner._guid} has won the game!`);
    throw new GameOver(winner);
  }

  handleGameDrawn () {
    this.log('The game is a draw!');
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
      const input = this._hasPriority.getInput();
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

  // Handles incoming input from players
  handleInput (player, input, data) {
    this.performAllStateBasedActions();

    this.log(`>> ${player._guid} ${input}`);
    switch (input) {
      case Inputs.PASS_PRIORITY:
        this.passPriority(player);
        break;
      case Inputs.FINISH_CHOICE:
        this.finishChoice(data);
        break;
      case Inputs.DECLARE_ATTACKERS:
        this.finishDeclareAttackers();
        break;
      case Inputs.DECLARE_BLOCKERS:
        this.finishDeclareBlockers();
        break;
      case Inputs.CONCEDE:
        player.concede();
        this.performAllStateBasedActions();
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
      default:
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
   * This may or may not actually allow the action to happen, as we first check
   * for any replacement effects to be applied.
   * @param {string} gameAction
   * @param {any} data
   * @return {Boolean} True if the action may happen as intended, false if it
   *                   will be replaced
   */
  performGameAction (gameAction, data) {
    if (!this._actionListeners[gameAction]) {
      return true;
    }

    for (const listener of this._actionListeners[gameAction]) {
      listener.onGameAction(gameAction, data);
    }

    // FIXME: Handle multiple replacement effects properly

    return false;
  }

  // Sends output from the game to the visualization
  addOutput (output, data) {
    this._outputs.push({
      output: output,
      data: data,
    });
  }

  getOutputs () {
    const ret = this._outputs;
    this._outputs = [];
    return ret;
  }
}

module.exports = {
  Game: Game,
  GameOver: GameOver,
};
