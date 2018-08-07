"use strict";
const Constants = require ("../../../Constants");
const WindDancerBase = require("../setTPR/WindDancer");

class WindDancer extends WindDancerBase {
  constructor (game) {
    super(game, "Wind Dancer", "Tempest", "TMP");
  }
}

module.exports = WindDancer;
