"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShatteringSpree extends Card {
  constructor(game) {
    super(game, "Shattering Spree", "Guildpact", "GPT");
  }
}

module.exports = ShatteringSpree;
