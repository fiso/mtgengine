"use strict";
const Constants = require ("../../../Constants");
const DriveroftheDeadBase = require("../setCN2/DriveroftheDead");

class DriveroftheDead extends DriveroftheDeadBase {
  constructor (game) {
    super(game, "Driver of the Dead", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = DriveroftheDead;
