"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LivingInferno extends UnimplementedCard {
  constructor (game) {
    super(game, "Living Inferno", "Guildpact", "GPT");
  }
}

module.exports = LivingInferno;
