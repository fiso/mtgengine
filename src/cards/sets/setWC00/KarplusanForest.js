"use strict";
const Constants = require ("../../../Constants");
const KarplusanForestBase = require("../setC16/KarplusanForest");

class KarplusanForest extends KarplusanForestBase {
  constructor (game) {
    super(game, "Karplusan Forest", "World Championship Decks 2000", "WC00");
  }
}

module.exports = KarplusanForest;
