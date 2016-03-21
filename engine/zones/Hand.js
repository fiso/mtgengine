"use strict";
const Zone = require("./Zone");
const Constants = require ("../Constants");

class Hand extends Zone {
  constructor (game, owner) {
    super(game, Constants.zoneTypes.HIDDEN, Constants.zoneOwnership.PLAYER, owner, Constants.zoneIdentifiers.HAND);
  }
}

module.exports = Hand;
