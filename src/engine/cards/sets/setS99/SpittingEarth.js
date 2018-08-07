"use strict";
const Constants = require ("../../../Constants");
const SpittingEarthBase = require("../setEVG/SpittingEarth");

class SpittingEarth extends SpittingEarthBase {
  constructor (game) {
    super(game, "Spitting Earth", "Starter 1999", "S99");
  }
}

module.exports = SpittingEarth;
