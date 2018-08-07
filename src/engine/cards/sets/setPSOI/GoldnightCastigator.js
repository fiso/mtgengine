"use strict";
const Constants = require ("../../../Constants");
const GoldnightCastigatorBase = require("../setSOI/GoldnightCastigator");

class GoldnightCastigator extends GoldnightCastigatorBase {
  constructor (game) {
    super(game, "Goldnight Castigator", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = GoldnightCastigator;
