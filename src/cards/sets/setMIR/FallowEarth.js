"use strict";
const Constants = require ("../../../Constants");
const FallowEarthBase = require("../set6ED/FallowEarth");

class FallowEarth extends FallowEarthBase {
  constructor (game) {
    super(game, "Fallow Earth", "Mirage", "MIR");
  }
}

module.exports = FallowEarth;
