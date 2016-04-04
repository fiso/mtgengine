"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PitTrap extends Card {
  constructor(game) {
    super(game, "Pit Trap", "Ice Age", "ICE");
  }
}

module.exports = PitTrap;
