"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KarplusanForestBase = require("../set6ED/KarplusanForest.js");

class KarplusanForest extends KarplusanForestBase {
  constructor(game) {
    super(game, "Karplusan Forest", "Seventh Edition", "7ED");
  }
}

module.exports = KarplusanForest;
