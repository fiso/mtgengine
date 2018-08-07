"use strict";
const Constants = require ("../../../Constants");
const PolarKrakenBase = require("../setMED/PolarKraken");

class PolarKraken extends PolarKrakenBase {
  constructor (game) {
    super(game, "Polar Kraken", "Ice Age", "ICE");
  }
}

module.exports = PolarKraken;
