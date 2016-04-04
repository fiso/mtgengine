"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TemurAscendancyBase = require("../setKTK/TemurAscendancy.js");

class TemurAscendancy extends TemurAscendancyBase {
  constructor(game) {
    super(game, "Temur Ascendancy", "Prerelease Events", "pPRE");
  }
}

module.exports = TemurAscendancy;
