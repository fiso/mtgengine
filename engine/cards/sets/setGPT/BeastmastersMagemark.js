"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BeastmastersMagemark extends Card {
  constructor(game) {
    super(game, "Beastmaster's Magemark", "Guildpact", "GPT");
  }
}

module.exports = BeastmastersMagemark;
