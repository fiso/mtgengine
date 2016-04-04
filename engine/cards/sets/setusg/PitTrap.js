"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PitTrapBase = require("../setICE/PitTrap.js");

class PitTrap extends PitTrapBase {
  constructor(game) {
    super(game, "Pit Trap", "Urza's Saga", "USG");
  }
}

module.exports = PitTrap;
