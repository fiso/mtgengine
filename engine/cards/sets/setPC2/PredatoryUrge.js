"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PredatoryUrge extends UnimplementedCard {
  constructor(game) {
    super(game, "Predatory Urge", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = PredatoryUrge;
