"use strict";
const MTGObject = require("./MTGObject");
const Constants = require("../Constants");
const GameActions = require("../GameActions");
const Outputs = require("../Outputs");

class Permanent extends MTGObject {
  constructor (game, owner, controller, card) {
    super(game);
    this._game = game;
    this._tapState = Constants.tapStates.UNTAPPED;
    this._flipState = Constants.flipStates.NORMAL;
    this._transformState = Constants.transformState.NORMAL;
    this._faceState = Constants.faceState.FACEUP;
    this._owner = owner;
    this._controller = controller;
    this._card = card;
    this._power = undefined;
    this._toughness = undefined;
    this._damage = 0;

    this._game._battlefield.addObject(this);
  }

  isControlledBy (player) {
    return this._controller === player;
  }

  isOwnedBy (player) {
    return this._owner === player;
  }

  onCleanup () {
    this._damage = 0;
  }

  isCreature () {
    if (this._card._types.indexOf(Constants.cardTypes.CREATURE) === -1) {
      return false;
    }

    return true;
  }

  destroy () {
    if (this.hasKeywordAbility(Constants.keywordAbilities.INDESTRUCTIBLE)) {
      return;
    }
    this.die();
  }

  die () {
    this._game._battlefield.removeObject(this);
    this._owner._graveyard.addObject(this._card);
  }

  /**
   * @returns {number} The current power of the permanent, if it's a creature.
   */
  getPower () {
    return this._power;
  }

  /**
   * @returns {number} The current toughness of the permanent, if it's a creature.
   */
  getToughness () {
    return this._toughness;
  }

  hasLethalDamage () {
    return this._damage >= this.getToughness();
  }

  hasNonPositiveToughness () {
    return this.getToughness() <= 0;
  }

  isControlledBy (player) {
    return this._controller === player;
  }

  tap () {
    if (this._tapState === Constants.tapStates.TAPPED) {
      return;
    }

    if (this._game.performGameAction(GameActions.TAP_PERMANENT, {permanent: this})) {
      this._game.log("Tapping " + this._card._name);
      this._tapState = Constants.tapStates.TAPPED;
      this._game.addOutput(Outputs.PERMANENT_TAPPED, {permanent: this});
    }
  }

  untap () {
    if (this._tapState === Constants.tapStates.UNTAPPED) {
      return;
    }

    if (this._game.performGameAction(GameActions.UNTAP_PERMANENT, {permanent: this})) {
      this._game.log("Untapping " + this._card._name);
      this._tapState = Constants.tapStates.UNTAPPED;
      this._game.addOutput(Outputs.PERMANENT_UNTAPPED, {permanent: this});
    }
  }

  tapOrUntap () {
    let targetState = this._tapState === Constants.tapStates.TAPPED ? Constants.tapStates.UNTAPPED : Constants.tapStates.TAPPED;
    let gameAction = targetState === Constants.tapStates.TAPPED ? GameActions.TAP_PERMANENT : GameActions.UNTAP_PERMANENT;
    let output = targetState === Constants.tapStates.TAPPED ? Outputs.PERMANENT_TAPPED : Outputs.PERMANENT_UNTAPPED;
    if (this._game.performGameAction(gameAction, {permanent: this})) {
      this._game.log("Toggling tap state for " + this._card._name);
      this._tapState = targetState;
      this._game.addOutput(Outputs.PERMANENT_UNTAPPED, {permanent: this});
    }
  }
}

module.exports = Permanent;
