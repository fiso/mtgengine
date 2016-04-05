"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SanguinePraetor extends UnimplementedCard {
  constructor(game) {
    super(game, "Sanguine Praetor", "Guildpact", "GPT");
  }
}

module.exports = SanguinePraetor;
