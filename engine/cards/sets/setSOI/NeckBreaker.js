"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NeckBreaker extends Card {
  constructor(game) {
    super(game, "Neck Breaker", "Shadows over Innistrad", "SOI");
  }
}

module.exports = NeckBreaker;
