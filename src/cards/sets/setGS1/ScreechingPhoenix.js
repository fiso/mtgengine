"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScreechingPhoenix extends UnimplementedCard {
  constructor (game) {
    super(game, "Screeching Phoenix", "Global Series Jiang Yanggu & Mu Yanling", "GS1");
  }
}

module.exports = ScreechingPhoenix;
