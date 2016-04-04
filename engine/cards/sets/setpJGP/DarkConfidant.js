"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarkConfidant extends Card {
  constructor(game) {
    super(game, "Dark Confidant", "Judge Gift Program", "pJGP");
  }
}

module.exports = DarkConfidant;
