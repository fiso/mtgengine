"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NeckBreaker extends UnimplementedCard {
  constructor(game) {
    super(game, "Neck Breaker", "Shadows over Innistrad", "SOI");
  }
}

module.exports = NeckBreaker;
