"use strict";
const Constants = require ("../../../Constants");
const HarnesstheStormBase = require("../setSOI/HarnesstheStorm");

class HarnesstheStorm extends HarnesstheStormBase {
  constructor (game) {
    super(game, "Harness the Storm", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = HarnesstheStorm;
