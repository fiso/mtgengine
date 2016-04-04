"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DriveroftheDeadBase = require("../setAVR/DriveroftheDead.js");

class DriveroftheDead extends DriveroftheDeadBase {
  constructor(game) {
    super(game, "Driver of the Dead", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = DriveroftheDead;
