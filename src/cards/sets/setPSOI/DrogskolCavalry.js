"use strict";
const Constants = require ("../../../Constants");
const DrogskolCavalryBase = require("../setSOI/DrogskolCavalry");

class DrogskolCavalry extends DrogskolCavalryBase {
  constructor (game) {
    super(game, "Drogskol Cavalry", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = DrogskolCavalry;
