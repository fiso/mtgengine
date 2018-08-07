"use strict";
const Constants = require ("../../../Constants");
const OliviaMobilizedforWarBase = require("../setSOI/OliviaMobilizedforWar");

class OliviaMobilizedforWar extends OliviaMobilizedforWarBase {
  constructor (game) {
    super(game, "Olivia, Mobilized for War", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = OliviaMobilizedforWar;
