"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoonEatingDog extends UnimplementedCard {
  constructor (game) {
    super(game, "Moon-Eating Dog", "Global Series Jiang Yanggu & Mu Yanling", "GS1");
  }
}

module.exports = MoonEatingDog;
