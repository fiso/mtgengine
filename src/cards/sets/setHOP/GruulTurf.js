"use strict";
const Constants = require ("../../../Constants");
const GruulTurfBase = require("../setGPT/GruulTurf");

class GruulTurf extends GruulTurfBase {
  constructor(game) {
    super(game, "Gruul Turf", "Planechase", "HOP");
  }
}

module.exports = GruulTurf;
