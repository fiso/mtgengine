"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FatedIntervention extends UnimplementedCard {
  constructor(game) {
    super(game, "Fated Intervention", "Born of the Gods", "BNG");
  }
}

module.exports = FatedIntervention;
