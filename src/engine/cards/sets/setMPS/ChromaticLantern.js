"use strict";
const Constants = require ("../../../Constants");
const ChromaticLanternBase = require("../setC16/ChromaticLantern");

class ChromaticLantern extends ChromaticLanternBase {
  constructor (game) {
    super(game, "Chromatic Lantern", "Kaladesh Inventions", "MPS");
  }
}

module.exports = ChromaticLantern;
