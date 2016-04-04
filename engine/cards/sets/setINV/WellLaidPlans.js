"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WellLaidPlans extends Card {
  constructor(game) {
    super(game, "Well-Laid Plans", "Invasion", "INV");
  }
}

module.exports = WellLaidPlans;
