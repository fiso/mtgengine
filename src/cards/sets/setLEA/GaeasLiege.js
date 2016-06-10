"use strict";
const Constants = require ("../../../Constants");
const GaeasLiegeBase = require("../setCED/GaeasLiege");

class GaeasLiege extends GaeasLiegeBase {
  constructor (game) {
    super(game, "Gaea's Liege", "Limited Edition Alpha", "LEA");
  }
}

module.exports = GaeasLiege;
