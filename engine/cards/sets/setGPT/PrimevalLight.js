"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimevalLight extends UnimplementedCard {
  constructor(game) {
    super(game, "Primeval Light", "Guildpact", "GPT");
  }
}

module.exports = PrimevalLight;
