"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WindDancerBase = require("../setCNS/WindDancer.js");

class WindDancer extends WindDancerBase {
  constructor(game) {
    super(game, "Wind Dancer", "Tempest", "TMP");
  }
}

module.exports = WindDancer;
