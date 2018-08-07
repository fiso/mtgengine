"use strict";
const Constants = require ("../../../Constants");
const TidalKrakenBase = require("../set9ED/TidalKraken");

class TidalKraken extends TidalKrakenBase {
  constructor (game) {
    super(game, "Tidal Kraken", "Eighth Edition", "8ED");
  }
}

module.exports = TidalKraken;
