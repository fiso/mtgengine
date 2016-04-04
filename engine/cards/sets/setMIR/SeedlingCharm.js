"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeedlingCharm extends Card {
  constructor(game) {
    super(game, "Seedling Charm", "Mirage", "MIR");
  }
}

module.exports = SeedlingCharm;
