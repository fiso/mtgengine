"use strict";
const Constants = require ("../../../Constants");
const DeathcapCultivatorBase = require("../setSOI/DeathcapCultivator");

class DeathcapCultivator extends DeathcapCultivatorBase {
  constructor (game) {
    super(game, "Deathcap Cultivator", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = DeathcapCultivator;
