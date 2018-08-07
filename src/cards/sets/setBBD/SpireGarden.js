"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpireGarden extends UnimplementedCard {
  constructor (game) {
    super(game, "Spire Garden", "Battlebond", "BBD");
  }
}

module.exports = SpireGarden;
