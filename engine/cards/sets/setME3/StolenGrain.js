"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StolenGrain extends UnimplementedCard {
  constructor(game) {
    super(game, "Stolen Grain", "Masters Edition III", "ME3");
  }
}

module.exports = StolenGrain;
