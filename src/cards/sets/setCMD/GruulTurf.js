"use strict";
const Constants = require ("../../../Constants");
const GruulTurfBase = require("../setGPT/GruulTurf");

class GruulTurf extends GruulTurfBase {
  constructor (game) {
    super(game, "Gruul Turf", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = GruulTurf;
