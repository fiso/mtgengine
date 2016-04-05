"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SiegeofTowers extends UnimplementedCard {
  constructor(game) {
    super(game, "Siege of Towers", "Guildpact", "GPT");
  }
}

module.exports = SiegeofTowers;
