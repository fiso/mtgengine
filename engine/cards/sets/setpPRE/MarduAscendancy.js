"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MarduAscendancyBase = require("../setKTK/MarduAscendancy.js");

class MarduAscendancy extends MarduAscendancyBase {
  constructor(game) {
    super(game, "Mardu Ascendancy", "Prerelease Events", "pPRE");
  }
}

module.exports = MarduAscendancy;
