"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HiddenPredators extends UnimplementedCard {
  constructor (game) {
    super(game, "Hidden Predators", "Urza's Saga", "USG");
  }
}

module.exports = HiddenPredators;
