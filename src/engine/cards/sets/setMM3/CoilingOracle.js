"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoilingOracle extends UnimplementedCard {
  constructor (game) {
    super(game, "Coiling Oracle", "Modern Masters 2017", "MM3");
  }
}

module.exports = CoilingOracle;
