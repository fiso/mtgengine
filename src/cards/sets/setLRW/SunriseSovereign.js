"use strict";
const Constants = require ("../../../Constants");
const SunriseSovereignBase = require("../setCM2/SunriseSovereign");

class SunriseSovereign extends SunriseSovereignBase {
  constructor (game) {
    super(game, "Sunrise Sovereign", "Lorwyn", "LRW");
  }
}

module.exports = SunriseSovereign;
