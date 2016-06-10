"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathcapCultivator extends UnimplementedCard {
  constructor (game) {
    super(game, "Deathcap Cultivator", "Shadows over Innistrad", "SOI");
  }
}

module.exports = DeathcapCultivator;
