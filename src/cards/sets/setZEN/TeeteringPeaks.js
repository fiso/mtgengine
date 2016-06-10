"use strict";
const Constants = require ("../../../Constants");
const TeeteringPeaksBase = require("../setpFNM/TeeteringPeaks");

class TeeteringPeaks extends TeeteringPeaksBase {
  constructor (game) {
    super(game, "Teetering Peaks", "Zendikar", "ZEN");
  }
}

module.exports = TeeteringPeaks;
