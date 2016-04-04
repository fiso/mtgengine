"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PredatorsStrike extends UnimplementedCard {
  constructor(game) {
    super(game, "Predator's Strike", "Mirrodin", "MRD");
  }
}

module.exports = PredatorsStrike;
