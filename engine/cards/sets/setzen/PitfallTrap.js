"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PitfallTrap extends Card {
  constructor(game) {
    super(game, "Pitfall Trap", "Zendikar", "ZEN");
  }
}

module.exports = PitfallTrap;
