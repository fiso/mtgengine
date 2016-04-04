"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GarrukPrimalHunterBase = require("../setM12/GarrukPrimalHunter.js");

class GarrukPrimalHunter extends GarrukPrimalHunterBase {
  constructor(game) {
    super(game, "Garruk, Primal Hunter", "Magic 2013", "M13");
  }
}

module.exports = GarrukPrimalHunter;
