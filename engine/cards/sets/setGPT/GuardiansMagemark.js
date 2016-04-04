"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GuardiansMagemark extends Card {
  constructor(game) {
    super(game, "Guardian's Magemark", "Guildpact", "GPT");
  }
}

module.exports = GuardiansMagemark;
