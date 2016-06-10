"use strict";
const Constants = require ("../../../Constants");
const TidalKrakenBase = require("../set8ED/TidalKraken");

class TidalKraken extends TidalKrakenBase {
  constructor (game) {
    super(game, "Tidal Kraken", "Ninth Edition", "9ED");
  }
}

module.exports = TidalKraken;
