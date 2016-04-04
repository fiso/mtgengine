"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConsigntoDust extends UnimplementedCard {
  constructor(game) {
    super(game, "Consign to Dust", "Journey into Nyx", "JOU");
  }
}

module.exports = ConsigntoDust;
