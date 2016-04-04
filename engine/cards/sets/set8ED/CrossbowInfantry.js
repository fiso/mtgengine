"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrossbowInfantry extends Card {
  constructor(game) {
    super(game, "Crossbow Infantry", "Eighth Edition", "8ED");
  }
}

module.exports = CrossbowInfantry;
