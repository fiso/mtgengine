"use strict";
const Constants = require ("../../../Constants");
const KarplusanForestBase = require("../set6ED/KarplusanForest");

class KarplusanForest extends KarplusanForestBase {
  constructor(game) {
    super(game, "Karplusan Forest", "Seventh Edition", "7ED");
  }
}

module.exports = KarplusanForest;
