"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReflectingPool extends UnimplementedCard {
  constructor (game) {
    super(game, "Reflecting Pool", "Conspiracy", "CNS");
  }
}

module.exports = ReflectingPool;
