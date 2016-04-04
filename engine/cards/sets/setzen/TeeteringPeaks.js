"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TeeteringPeaksBase = require("../setpFNM/TeeteringPeaks.js");

class TeeteringPeaks extends TeeteringPeaksBase {
  constructor(game) {
    super(game, "Teetering Peaks", "Zendikar", "ZEN");
  }
}

module.exports = TeeteringPeaks;
