'use strict';
const MTGObject = require('./MTGObject');
const Constants = require('../Constants');
const assert = require('assert');

class Spell extends MTGObject {
  constructor (game, controller, fromZone, card, targets) {
    super(game);
    this._controller = controller;
    this._card = card;
    this._targets = targets;
    this._castFromZone = fromZone;
  }

  resolve () {
    const card = this._card;
    card.resolve(this._controller, this._targets);
    const zone = this.getCurrentZone();
    assert(zone._id === Constants.zoneIdentifiers.STACK);
    zone.removeObject(this);
    if (card.hasType(Constants.cardTypes.INSTANT) ||
        card.hasType(Constants.cardTypes.SORCERY)) {
      this._controller._graveyard.addObject(card);
    }
  }

  getCost () {
    return this._card.getCost();
  }
}

module.exports = Spell;
