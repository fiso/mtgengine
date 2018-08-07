"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KavuPredator extends UnimplementedCard {
  constructor (game) {
    super(game, "Kavu Predator", "Masters 25", "A25");
  }
}

module.exports = KavuPredator;
