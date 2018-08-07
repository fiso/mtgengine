"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PredatoryUrge extends UnimplementedCard {
  constructor (game) {
    super(game, "Predatory Urge", "Planechase Anthology", "PCA");
  }
}

module.exports = PredatoryUrge;
