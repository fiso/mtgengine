"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoldForgedSentinel extends Card {
  constructor(game) {
    super(game, "Gold-Forged Sentinel", "Journey into Nyx", "JOU");
  }
}

module.exports = GoldForgedSentinel;
