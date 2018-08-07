"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PeaceStrider extends UnimplementedCard {
  constructor (game) {
    super(game, "Peace Strider", "Battlebond", "BBD");
  }
}

module.exports = PeaceStrider;
