"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FallowEarthBase = require("../set6ED/FallowEarth.js");

class FallowEarth extends FallowEarthBase {
  constructor(game) {
    super(game, "Fallow Earth", "Mirage", "MIR");
  }
}

module.exports = FallowEarth;
