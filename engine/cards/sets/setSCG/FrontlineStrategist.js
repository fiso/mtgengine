"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FrontlineStrategist extends Card {
  constructor(game) {
    super(game, "Frontline Strategist", "Scourge", "SCG");
  }
}

module.exports = FrontlineStrategist;
