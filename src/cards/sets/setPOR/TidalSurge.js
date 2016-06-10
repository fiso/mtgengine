"use strict";
const Constants = require ("../../../Constants");
const TidalSurgeBase = require("../set6ED/TidalSurge");

class TidalSurge extends TidalSurgeBase {
  constructor (game) {
    super(game, "Tidal Surge", "Portal", "POR");
  }
}

module.exports = TidalSurge;
