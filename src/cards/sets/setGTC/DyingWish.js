"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DyingWish extends UnimplementedCard {
  constructor (game) {
    super(game, "Dying Wish", "Gatecrash", "GTC");
  }
}

module.exports = DyingWish;
