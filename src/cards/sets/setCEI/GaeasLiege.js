"use strict";
const Constants = require ("../../../Constants");
const GaeasLiegeBase = require("../setTSB/GaeasLiege");

class GaeasLiege extends GaeasLiegeBase {
  constructor (game) {
    super(game, "Gaea's Liege", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = GaeasLiege;
