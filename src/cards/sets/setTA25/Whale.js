"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Whale extends UnimplementedCard {
  constructor (game) {
    super(game, "Whale", "Masters 25 Tokens", "TA25");
  }
}

module.exports = Whale;
