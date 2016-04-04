"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SapphireCharm extends Card {
  constructor(game) {
    super(game, "Sapphire Charm", "Mirage", "MIR");
  }
}

module.exports = SapphireCharm;
