"use strict";
const Constants = require ("../../../Constants");
const KarplusanForestBase = require("../setC16/KarplusanForest");

class KarplusanForest extends KarplusanForestBase {
  constructor (game) {
    super(game, "Karplusan Forest", "World Championship Decks 1998", "WC98");
  }
}

module.exports = KarplusanForest;
