"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SunriseSovereignBase = require("../setC15/SunriseSovereign.js");

class SunriseSovereign extends SunriseSovereignBase {
  constructor(game) {
    super(game, "Sunrise Sovereign", "Lorwyn", "LRW");
  }
}

module.exports = SunriseSovereign;
