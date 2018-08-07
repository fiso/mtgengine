"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FiveFingerDiscount extends UnimplementedCard {
  constructor (game) {
    super(game, "Five-Finger Discount", "Unstable", "UST");
  }
}

module.exports = FiveFingerDiscount;
