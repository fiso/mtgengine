"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KillerInstinct extends Card {
  constructor(game) {
    super(game, "Killer Instinct", "Guildpact", "GPT");
  }
}

module.exports = KillerInstinct;
