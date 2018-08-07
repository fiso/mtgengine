"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HalfSharkHalf extends UnimplementedCard {
  constructor (game) {
    super(game, "Half-Shark, Half-", "Unstable", "UST");
  }
}

module.exports = HalfSharkHalf;
