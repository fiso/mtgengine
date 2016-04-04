"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Withstand extends Card {
  constructor(game) {
    super(game, "Withstand", "Guildpact", "GPT");
  }
}

module.exports = Withstand;
