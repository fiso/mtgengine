"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpiritShield extends Card {
  constructor(game) {
    super(game, "Spirit Shield", "Fallen Empires", "FEM");
  }
}

module.exports = SpiritShield;
