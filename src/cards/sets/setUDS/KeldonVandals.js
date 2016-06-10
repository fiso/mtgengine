"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeldonVandals extends UnimplementedCard {
  constructor (game) {
    super(game, "Keldon Vandals", "Urza's Destiny", "UDS");
  }
}

module.exports = KeldonVandals;
