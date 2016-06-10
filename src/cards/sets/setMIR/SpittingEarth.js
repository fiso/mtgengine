"use strict";
const Constants = require ("../../../Constants");
const SpittingEarthBase = require("../set6ED/SpittingEarth");

class SpittingEarth extends SpittingEarthBase {
  constructor (game) {
    super(game, "Spitting Earth", "Mirage", "MIR");
  }
}

module.exports = SpittingEarth;
