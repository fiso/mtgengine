"use strict";
const Constants = require ("../../../Constants");
const PolarKrakenBase = require("../setICE/PolarKraken");

class PolarKraken extends PolarKrakenBase {
  constructor(game) {
    super(game, "Polar Kraken", "Masters Edition", "MED");
  }
}

module.exports = PolarKraken;
