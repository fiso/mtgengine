"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeepAnalysis extends UnimplementedCard {
  constructor (game) {
    super(game, "Deep Analysis", "Commander 2013 Edition", "C13");
  }
}

module.exports = DeepAnalysis;
