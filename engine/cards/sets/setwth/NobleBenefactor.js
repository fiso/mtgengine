"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NobleBenefactor extends UnimplementedCard {
  constructor(game) {
    super(game, "Noble Benefactor", "Weatherlight", "WTH");
  }
}

module.exports = NobleBenefactor;
