"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrimevalLight extends Card {
  constructor(game) {
    super(game, "Primeval Light", "Guildpact", "GPT");
  }
}

module.exports = PrimevalLight;
