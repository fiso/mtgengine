"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathcapCultivator extends Card {
  constructor(game) {
    super(game, "Deathcap Cultivator", "Shadows over Innistrad", "SOI");
  }
}

module.exports = DeathcapCultivator;
