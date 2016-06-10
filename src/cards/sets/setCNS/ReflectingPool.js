"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReflectingPool extends UnimplementedCard {
  constructor (game) {
    super(game, "Reflecting Pool", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = ReflectingPool;
