"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoilingOracle extends UnimplementedCard {
  constructor (game) {
    super(game, "Coiling Oracle", "Arena League", "pARL");
  }
}

module.exports = CoilingOracle;
