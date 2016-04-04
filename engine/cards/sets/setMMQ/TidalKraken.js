"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TidalKrakenBase = require("../set8ED/TidalKraken.js");

class TidalKraken extends TidalKrakenBase {
  constructor(game) {
    super(game, "Tidal Kraken", "Mercadian Masques", "MMQ");
  }
}

module.exports = TidalKraken;
