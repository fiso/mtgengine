"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrystalGolem extends Card {
  constructor(game) {
    super(game, "Crystal Golem", "Mirage", "MIR");
  }
}

module.exports = CrystalGolem;
