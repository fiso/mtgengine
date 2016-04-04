"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MonstrousGrowth extends Card {
  constructor(game) {
    super(game, "Monstrous Growth", "Eighth Edition", "8ED");
  }
}

module.exports = MonstrousGrowth;
