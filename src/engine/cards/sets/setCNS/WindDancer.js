"use strict";
const Constants = require ("../../../Constants");
const WindDancerBase = require("../setTPR/WindDancer");

class WindDancer extends WindDancerBase {
  constructor (game) {
    super(game, "Wind Dancer", "Conspiracy", "CNS");
  }
}

module.exports = WindDancer;
