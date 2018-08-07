"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrygonPredator extends UnimplementedCard {
  constructor (game) {
    super(game, "Trygon Predator", "Eternal Masters", "EMA");
  }
}

module.exports = TrygonPredator;
