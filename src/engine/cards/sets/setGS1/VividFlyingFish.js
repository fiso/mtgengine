"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VividFlyingFish extends UnimplementedCard {
  constructor (game) {
    super(game, "Vivid Flying Fish", "Global Series Jiang Yanggu & Mu Yanling", "GS1");
  }
}

module.exports = VividFlyingFish;
