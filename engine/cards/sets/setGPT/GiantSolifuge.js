"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiantSolifuge extends Card {
  constructor(game) {
    super(game, "Giant Solifuge", "Guildpact", "GPT");
  }
}

module.exports = GiantSolifuge;
