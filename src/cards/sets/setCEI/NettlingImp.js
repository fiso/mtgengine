"use strict";
const Constants = require ("../../../Constants");
const NettlingImpBase = require("../setCED/NettlingImp");

class NettlingImp extends NettlingImpBase {
  constructor (game) {
    super(game, "Nettling Imp", "International Collector's Edition", "CEI");
  }
}

module.exports = NettlingImp;
