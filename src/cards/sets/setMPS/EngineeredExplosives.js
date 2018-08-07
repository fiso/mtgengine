"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EngineeredExplosives extends UnimplementedCard {
  constructor (game) {
    super(game, "Engineered Explosives", "Kaladesh Inventions", "MPS");
  }
}

module.exports = EngineeredExplosives;
