"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StaticOrb extends Card {
  constructor(game) {
    super(game, "Static Orb", "Seventh Edition", "7ED");
  }
}

module.exports = StaticOrb;
