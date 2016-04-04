"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathCultist extends Card {
  constructor(game) {
    super(game, "Death Cultist", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = DeathCultist;
