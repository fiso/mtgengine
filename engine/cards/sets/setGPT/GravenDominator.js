"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GravenDominator extends Card {
  constructor(game) {
    super(game, "Graven Dominator", "Guildpact", "GPT");
  }
}

module.exports = GravenDominator;
