"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StolenGrain extends Card {
  constructor(game) {
    super(game, "Stolen Grain", "Masters Edition III", "ME3");
  }
}

module.exports = StolenGrain;
