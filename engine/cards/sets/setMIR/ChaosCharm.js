"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChaosCharm extends Card {
  constructor(game) {
    super(game, "Chaos Charm", "Mirage", "MIR");
  }
}

module.exports = ChaosCharm;
