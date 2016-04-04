"use strict";
const Constants = require ("../../../Constants");
const TidalKrakenBase = require("../set8ED/TidalKraken");

class TidalKraken extends TidalKrakenBase {
  constructor(game) {
    super(game, "Tidal Kraken", "Mercadian Masques", "MMQ");
  }
}

module.exports = TidalKraken;
