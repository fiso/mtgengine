"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FatedIntervention extends UnimplementedCard {
  constructor (game) {
    super(game, "Fated Intervention", "Magic 2015 Clash Pack", "CP1");
  }
}

module.exports = FatedIntervention;
