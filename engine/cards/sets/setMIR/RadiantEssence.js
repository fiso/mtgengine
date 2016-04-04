"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RadiantEssence extends Card {
  constructor(game) {
    super(game, "Radiant Essence", "Mirage", "MIR");
  }
}

module.exports = RadiantEssence;
