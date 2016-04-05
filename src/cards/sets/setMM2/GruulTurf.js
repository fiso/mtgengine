"use strict";
const Constants = require ("../../../Constants");
const GruulTurfBase = require("../setGPT/GruulTurf");

class GruulTurf extends GruulTurfBase {
  constructor(game) {
    super(game, "Gruul Turf", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = GruulTurf;
