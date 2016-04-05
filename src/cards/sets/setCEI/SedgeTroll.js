"use strict";
const Constants = require ("../../../Constants");
const SedgeTrollBase = require("../setCED/SedgeTroll");

class SedgeTroll extends SedgeTrollBase {
  constructor(game) {
    super(game, "Sedge Troll", "International Collector's Edition", "CEI");
  }
}

module.exports = SedgeTroll;
