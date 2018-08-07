"use strict";
const Constants = require ("../../../Constants");
const GaeasLiegeBase = require("../setTSB/GaeasLiege");

class GaeasLiege extends GaeasLiegeBase {
  constructor (game) {
    super(game, "Gaea's Liege", "Limited Edition Beta", "LEB");
  }
}

module.exports = GaeasLiege;
