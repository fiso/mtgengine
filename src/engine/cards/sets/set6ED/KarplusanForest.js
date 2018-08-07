"use strict";
const Constants = require ("../../../Constants");
const KarplusanForestBase = require("../setC16/KarplusanForest");

class KarplusanForest extends KarplusanForestBase {
  constructor (game) {
    super(game, "Karplusan Forest", "Classic Sixth Edition", "6ED");
  }
}

module.exports = KarplusanForest;
