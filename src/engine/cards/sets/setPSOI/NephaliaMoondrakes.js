"use strict";
const Constants = require ("../../../Constants");
const NephaliaMoondrakesBase = require("../setSOI/NephaliaMoondrakes");

class NephaliaMoondrakes extends NephaliaMoondrakesBase {
  constructor (game) {
    super(game, "Nephalia Moondrakes", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = NephaliaMoondrakes;
