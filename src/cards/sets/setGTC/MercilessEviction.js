"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MercilessEviction extends UnimplementedCard {
  constructor (game) {
    super(game, "Merciless Eviction", "Gatecrash", "GTC");
  }
}

module.exports = MercilessEviction;
