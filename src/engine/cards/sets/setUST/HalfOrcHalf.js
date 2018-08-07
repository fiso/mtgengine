"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HalfOrcHalf extends UnimplementedCard {
  constructor (game) {
    super(game, "Half-Orc, Half-", "Unstable", "UST");
  }
}

module.exports = HalfOrcHalf;
