"use strict";
const Constants = require ("../../../Constants");
const MarduAscendancyBase = require("../setKTK/MarduAscendancy");

class MarduAscendancy extends MarduAscendancyBase {
  constructor(game) {
    super(game, "Mardu Ascendancy", "Prerelease Events", "pPRE");
  }
}

module.exports = MarduAscendancy;
