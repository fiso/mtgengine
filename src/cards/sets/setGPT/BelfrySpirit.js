"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BelfrySpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Belfry Spirit", "Guildpact", "GPT");
  }
}

module.exports = BelfrySpirit;
