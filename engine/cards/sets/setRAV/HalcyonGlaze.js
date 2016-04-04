"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HalcyonGlaze extends Card {
  constructor(game) {
    super(game, "Halcyon Glaze", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = HalcyonGlaze;
