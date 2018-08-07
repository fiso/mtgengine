"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EngineeredPlague extends UnimplementedCard {
  constructor (game) {
    super(game, "Engineered Plague", "Friday Night Magic 2007", "F07");
  }
}

module.exports = EngineeredPlague;
