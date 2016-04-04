"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CausticRain extends Card {
  constructor(game) {
    super(game, "Caustic Rain", "Guildpact", "GPT");
  }
}

module.exports = CausticRain;
