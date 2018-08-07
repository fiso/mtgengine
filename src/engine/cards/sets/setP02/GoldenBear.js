"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoldenBear extends UnimplementedCard {
  constructor (game) {
    super(game, "Golden Bear", "Portal Second Age", "P02");
  }
}

module.exports = GoldenBear;
