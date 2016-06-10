"use strict";
const Library = require("./zones/Library");
const Graveyard = require("./zones/Graveyard");
const Hand = require("./zones/Hand");
const Permanent = require("./objects/Permanent");
const Spell = require("./objects/Spell");
const assert = require("assert");
const Constants = require("./Constants");

class Player {
  constructor (game, deck) {
    this._guid = game.getGuid("player");
    this._game = game;
    this._life = 20;
    this._poisonCounters = 0;
    this._maximumHandSize = 7;
    this._hasConceded = false;
    this._triedToDrawFromEmptyLibrary = false;
    this._inputQueue = [];
    this._library = new Library(game, this, deck);
    this._graveyard = new Graveyard(game, this);
    this._hand = new Hand(game, this);
    this._landPlaysRemaining = 0;
    this._manaPool = {};
  }

  ready () {
    return this._library.ready();
  }

  onNewTurn (activePlayer) {
    if (activePlayer) {
      this._landPlaysRemaining = 1;
    } else {
      this._landPlaysRemaining = 0;
    }
  }

  performTurnbasedActions (step, activePlayer) {
    switch (step) {
      case Constants.steps.UNTAP:
        this.onUntap(activePlayer);
        break;
      case Constants.steps.UPKEEP:
        this.onUpkeep(activePlayer);
        break;
      case Constants.steps.DRAW:
        this.onDraw(activePlayer);
        break
      case Constants.steps.MAIN1:
        this.onMain1(activePlayer);
        break;
      case Constants.steps.BEGIN_COMBAT:
        this.onBeginCombat(activePlayer);
        break;
      case Constants.steps.DECLARE_ATTACKERS:
        this.onDeclareAttackers(activePlayer);
        break;
      case Constants.steps.DECLARE_BLOCKERS:
        this.onDeclareBlockers(activePlayer);
        break;
      case Constants.steps.COMBAT_DAMAGE:
        this.onCombatDamage(activePlayer);
        break;
      case Constants.steps.END_COMBAT:
        this.onEndCombat(activePlayer);
        break;
      case Constants.steps.MAIN2:
        this.onMain2(activePlayer);
        break;
      case Constants.steps.END:
        this.onEnd(activePlayer);
        break;
      case Constants.steps.CLEANUP:
        this.onCleanup(activePlayer);
        break;
    }
  }

  onUntap (activePlayer) {
    if (activePlayer) {
      let permanents = this._game._battlefield.getPermanentsControlledByPlayer(this);
      for (let permanent of permanents) {
        permanent.untap();
      }
    }
  }

  onUpkeep (activePlayer) {

  }

  onDraw (activePlayer) {
    if (activePlayer) {
      this.drawCard();
    }
  }

  onMain1 (activePlayer) {

  }

  onBeginCombat (activePlayer) {

  }

  onDeclareAttackers (activePlayer) {

  }

  onDeclareBlockers (activePlayer) {

  }

  onCombatDamage (activePlayer) {

  }

  onEndCombat (activePlayer) {

  }

  onMain2 (activePlayer) {

  }

  onEnd (activePlayer) {

  }

  onCleanup (activePlayer) {
    if (activePlayer) {
      let cardsDiscarded = 0;
      while (this.getHand().numberOfObjects > this.getMaximumHandSize()) {
        // FIXME: Let the player choose a card
        let card = this.discardRandomCard();
        cardsDiscarded += card ? 1 : 0;
      }
      if (cardsDiscarded > 0) {
        this._game.log(`Active player discarded ${cardsDiscarded} cards`);
      }
    }
  }

  damage (amount, sourceId, sourceHasInfect) {
    if (sourceHasInfect) {
      this._poisonCounters += amount;
    } else {
      this._life -= amount;
    }

    this._game.log(`${this._guid} takes ${amount} damage from ${sourceId}. Life total: ${this._life} Poision counters: ${this._poisonCounters}`);
  }

  concede () {
    this._hasConceded = true;
  }

  hasLost () {
    if (this._life <= 0) {
      return true;
    }

    if (this._poisonCounters >= 10) {
      return true;
    }

    if (this._hasConceded) {
      return true;
    }

    if (this._triedToDrawFromEmptyLibrary) {
      return true;
    }

    return false;
  }

  drawCard () {
    let card = this._library.drawCard();
    if (!card) {
      this._triedToDrawFromEmptyLibrary = true;
      this._game.log(`${this._guid} tried to draw from an empty library`);
    } else {
      this._hand.addObject(card);
      this._game.log(`${this._guid} draws ${card._name}. ${this._library.objects.length} cards left in library.`);
    }
  }

  getHand () {
    return this._hand;
  }

  addInput (input, data) {
    this._inputQueue.push({input: input, data: data});
  }

  hasUnprocessedInputs () {
    return this._inputQueue.length > 0;
  }

  getInput () {
    return this._inputQueue.shift();
  }

  getMaximumHandSize () {
    return this._maximumHandSize;
  }

  discardRandomCard () {
    // FIXME: This is not random, it just picks the last card
    let card = this._hand.objects.pop();
    if (card) {
      this._graveyard.addObject(card);
    }

    return card;
  }

  putLandIntoPlay (landCard, countsAsNormalLandPlay) {
    if (countsAsNormalLandPlay) {
      assert(this._landPlaysRemaining >= 1)
      assert(this._game._stack.empty());

      this._landPlaysRemaining--;
    }

    let card = this._hand.removeObject(landCard);
    assert(card);

    let permanent = new Permanent(this._game, this, this, landCard);
    return permanent;
  }

  castSpell (card, targets) {
    let zone = card.getCurrentZone();
    card = zone.removeObject(card);
    assert(card);

    let cost = card.cost;
    let hasUnpaidCosts = false;
    for (let manaType in cost.mana) {
      this._game.log(`Cost: ${cost.mana[manaType]} ${manaType}`);
      if (manaType === Constants.costs.GENERIC) {
        this._game.log("FIXME: Considering generic mana to be auto-paid");
      } else if (!this._manaPool[manaType] ||
        (this._manaPool[manaType] < cost.mana[manaType])) {
        hasUnpaidCosts = true;
      } else {
        this._game.log(`Pool has ${this._manaPool[manaType]}`);
        this._manaPool[manaType] -= cost.mana[manaType];
      }
    }

    assert(!hasUnpaidCosts);
    this._game.log("All costs paid");

    let spell = new Spell(this._game, this, zone, card, targets);
    this._game._stack.addObject(spell);
    this._game.log("Spell added to stack");
    this._game.log(spell.getCurrentZone()._id);
    return spell;
  }

  activateAbility (object, abilityIndex) {
    let ability = object._card._abilities[abilityIndex];
    if (ability.isManaAbility) {
      ability.abilityCallback(this, [], [], []);
    } else {
      let abilityObject = new Ability(this._game, ability, this, object._card, []);
      this._game._stack.addObject(abilityObject);
      return abilityObject;
    }
  }

  addToManaPool (mana, amount) {
    if (!this._manaPool[mana]) {
      this._manaPool[mana] = 0;
    }

    this._game.log(`ADDING TO MANA POOL: ${mana} ${amount}`);
    this._manaPool[mana] += amount;
  }

  emptyManaPool () {
    this._manaPool = {};
  }
}

module.exports = Player;
