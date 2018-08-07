"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AggressiveInstinct extends UnimplementedCard {
  constructor (game) {
    super(game, "Aggressive Instinct", "Global Series Jiang Yanggu & Mu Yanling", "GS1");
  }
}

module.exports = AggressiveInstinct;
