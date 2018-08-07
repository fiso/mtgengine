"use strict";
const Constants = require ("../../../Constants");
const SedgeTrollBase = require("../setME4/SedgeTroll");

class SedgeTroll extends SedgeTrollBase {
  constructor (game) {
    super(game, "Sedge Troll", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = SedgeTroll;
