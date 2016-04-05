"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeldonHalberdier extends UnimplementedCard {
  constructor(game) {
    super(game, "Keldon Halberdier", "Time Spiral", "TSP");
  }
}

module.exports = KeldonHalberdier;
