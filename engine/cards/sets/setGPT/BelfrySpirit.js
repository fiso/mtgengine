"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BelfrySpirit extends Card {
  constructor(game) {
    super(game, "Belfry Spirit", "Guildpact", "GPT");
  }
}

module.exports = BelfrySpirit;
