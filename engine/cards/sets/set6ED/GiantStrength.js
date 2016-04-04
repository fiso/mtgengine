"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiantStrength extends Card {
  constructor(game) {
    super(game, "Giant Strength", "Classic Sixth Edition", "6ED");
  }
}

module.exports = GiantStrength;
