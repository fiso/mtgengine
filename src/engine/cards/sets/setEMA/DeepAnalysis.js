"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeepAnalysis extends UnimplementedCard {
  constructor (game) {
    super(game, "Deep Analysis", "Eternal Masters", "EMA");
  }
}

module.exports = DeepAnalysis;
