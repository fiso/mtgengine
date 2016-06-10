"use strict";
const Constants = require ("../../../Constants");
const WindDancerBase = require("../setCNS/WindDancer");

class WindDancer extends WindDancerBase {
  constructor (game) {
    super(game, "Wind Dancer", "Tempest Remastered", "TPR");
  }
}

module.exports = WindDancer;
