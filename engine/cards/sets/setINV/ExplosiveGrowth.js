"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExplosiveGrowth extends Card {
  constructor(game) {
    super(game, "Explosive Growth", "Invasion", "INV");
  }
}

module.exports = ExplosiveGrowth;
