"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpittingEarthBase = require("../set6ED/SpittingEarth.js");

class SpittingEarth extends SpittingEarthBase {
  constructor(game) {
    super(game, "Spitting Earth", "Starter 1999", "S99");
  }
}

module.exports = SpittingEarth;
