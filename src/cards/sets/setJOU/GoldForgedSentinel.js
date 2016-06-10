"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoldForgedSentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Gold-Forged Sentinel", "Journey into Nyx", "JOU");
  }
}

module.exports = GoldForgedSentinel;
