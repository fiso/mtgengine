"use strict";
const Constants = require ("../../../Constants");
const SpittingEarthBase = require("../setEVG/SpittingEarth");

class SpittingEarth extends SpittingEarthBase {
  constructor (game) {
    super(game, "Spitting Earth", "Tenth Edition", "10E");
  }
}

module.exports = SpittingEarth;
