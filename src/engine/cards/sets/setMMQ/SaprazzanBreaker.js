"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SaprazzanBreaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Saprazzan Breaker", "Mercadian Masques", "MMQ");
  }
}

module.exports = SaprazzanBreaker;
