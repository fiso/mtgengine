"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wolf extends UnimplementedCard {
  constructor (game) {
    super(game, "Wolf", "Masters 25 Tokens", "TA25");
  }
}

module.exports = Wolf;
