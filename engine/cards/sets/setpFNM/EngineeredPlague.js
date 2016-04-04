"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EngineeredPlague extends UnimplementedCard {
  constructor(game) {
    super(game, "Engineered Plague", "Friday Night Magic", "pFNM");
  }
}

module.exports = EngineeredPlague;
