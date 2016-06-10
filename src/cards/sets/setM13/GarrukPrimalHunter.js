"use strict";
const Constants = require ("../../../Constants");
const GarrukPrimalHunterBase = require("../setM12/GarrukPrimalHunter");

class GarrukPrimalHunter extends GarrukPrimalHunterBase {
  constructor (game) {
    super(game, "Garruk, Primal Hunter", "Magic 2013", "M13");
  }
}

module.exports = GarrukPrimalHunter;
