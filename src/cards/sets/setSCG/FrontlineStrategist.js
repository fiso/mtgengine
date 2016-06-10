"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrontlineStrategist extends UnimplementedCard {
  constructor (game) {
    super(game, "Frontline Strategist", "Scourge", "SCG");
  }
}

module.exports = FrontlineStrategist;
