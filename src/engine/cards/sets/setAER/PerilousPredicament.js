"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PerilousPredicament extends UnimplementedCard {
  constructor (game) {
    super(game, "Perilous Predicament", "Aether Revolt", "AER");
  }
}

module.exports = PerilousPredicament;
