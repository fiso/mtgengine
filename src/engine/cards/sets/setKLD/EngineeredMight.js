"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EngineeredMight extends UnimplementedCard {
  constructor (game) {
    super(game, "Engineered Might", "Kaladesh", "KLD");
  }
}

module.exports = EngineeredMight;
