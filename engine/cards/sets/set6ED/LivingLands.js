"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LivingLands extends Card {
  constructor(game) {
    super(game, "Living Lands", "Classic Sixth Edition", "6ED");
  }
}

module.exports = LivingLands;
