"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StonewiseFortifier extends UnimplementedCard {
  constructor(game) {
    super(game, "Stonewise Fortifier", "Journey into Nyx", "JOU");
  }
}

module.exports = StonewiseFortifier;
