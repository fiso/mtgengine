"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenalishEmissary extends UnimplementedCard {
  constructor (game) {
    super(game, "Benalish Emissary", "Invasion", "INV");
  }
}

module.exports = BenalishEmissary;
