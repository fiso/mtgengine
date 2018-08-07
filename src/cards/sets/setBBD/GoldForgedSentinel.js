"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoldForgedSentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Gold-Forged Sentinel", "Battlebond", "BBD");
  }
}

module.exports = GoldForgedSentinel;
