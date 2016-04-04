"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EntertheInfinite extends UnimplementedCard {
  constructor(game) {
    super(game, "Enter the Infinite", "Gatecrash", "GTC");
  }
}

module.exports = EntertheInfinite;
