"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ValakutPredator extends UnimplementedCard {
  constructor(game) {
    super(game, "Valakut Predator", "Battle for Zendikar", "BFZ");
  }
}

module.exports = ValakutPredator;
