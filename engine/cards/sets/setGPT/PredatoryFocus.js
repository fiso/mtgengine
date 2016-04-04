"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PredatoryFocus extends Card {
  constructor(game) {
    super(game, "Predatory Focus", "Guildpact", "GPT");
  }
}

module.exports = PredatoryFocus;
