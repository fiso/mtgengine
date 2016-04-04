"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SiegeofTowers extends Card {
  constructor(game) {
    super(game, "Siege of Towers", "Guildpact", "GPT");
  }
}

module.exports = SiegeofTowers;
