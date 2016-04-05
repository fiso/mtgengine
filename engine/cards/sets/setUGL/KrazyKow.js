"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrazyKow extends UnimplementedCard {
  constructor(game) {
    super(game, "Krazy Kow", "Unglued", "UGL");
  }
}

module.exports = KrazyKow;
