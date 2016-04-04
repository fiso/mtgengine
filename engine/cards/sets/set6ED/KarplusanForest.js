"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KarplusanForest extends Card {
  constructor(game) {
    super(game, "Karplusan Forest", "Classic Sixth Edition", "6ED");
  }
}

module.exports = KarplusanForest;
