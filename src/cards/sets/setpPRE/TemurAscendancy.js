"use strict";
const Constants = require ("../../../Constants");
const TemurAscendancyBase = require("../setKTK/TemurAscendancy");

class TemurAscendancy extends TemurAscendancyBase {
  constructor (game) {
    super(game, "Temur Ascendancy", "Prerelease Events", "pPRE");
  }
}

module.exports = TemurAscendancy;
