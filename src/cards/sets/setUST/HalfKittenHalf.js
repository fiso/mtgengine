"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HalfKittenHalf extends UnimplementedCard {
  constructor (game) {
    super(game, "Half-Kitten, Half-", "Unstable", "UST");
  }
}

module.exports = HalfKittenHalf;
