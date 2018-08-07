"use strict";
const Constants = require ("../../../Constants");
const GruulTurfBase = require("../setC18/GruulTurf");

class GruulTurf extends GruulTurfBase {
  constructor (game) {
    super(game, "Gruul Turf", "Guildpact", "GPT");
  }
}

module.exports = GruulTurf;
