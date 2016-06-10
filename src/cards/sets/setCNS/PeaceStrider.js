"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PeaceStrider extends UnimplementedCard {
  constructor (game) {
    super(game, "Peace Strider", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = PeaceStrider;
