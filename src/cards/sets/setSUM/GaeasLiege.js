"use strict";
const Constants = require ("../../../Constants");
const GaeasLiegeBase = require("../setTSB/GaeasLiege");

class GaeasLiege extends GaeasLiegeBase {
  constructor (game) {
    super(game, "Gaea's Liege", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = GaeasLiege;
