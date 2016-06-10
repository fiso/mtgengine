"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrygonPredator extends UnimplementedCard {
  constructor (game) {
    super(game, "Trygon Predator", "Commander 2015", "C15");
  }
}

module.exports = TrygonPredator;
