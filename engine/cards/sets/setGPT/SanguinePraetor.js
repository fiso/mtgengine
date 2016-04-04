"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SanguinePraetor extends Card {
  constructor(game) {
    super(game, "Sanguine Praetor", "Guildpact", "GPT");
  }
}

module.exports = SanguinePraetor;
