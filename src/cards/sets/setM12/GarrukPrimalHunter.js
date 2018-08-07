"use strict";
const Constants = require ("../../../Constants");
const GarrukPrimalHunterBase = require("../setM13/GarrukPrimalHunter");

class GarrukPrimalHunter extends GarrukPrimalHunterBase {
  constructor (game) {
    super(game, "Garruk, Primal Hunter", "Magic 2012", "M12");
  }
}

module.exports = GarrukPrimalHunter;
