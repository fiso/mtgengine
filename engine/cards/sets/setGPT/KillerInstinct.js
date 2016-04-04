"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KillerInstinct extends UnimplementedCard {
  constructor(game) {
    super(game, "Killer Instinct", "Guildpact", "GPT");
  }
}

module.exports = KillerInstinct;
