"use strict";
const Constants = require ("../../../Constants");
const TeeteringPeaksBase = require("../setF11/TeeteringPeaks");

class TeeteringPeaks extends TeeteringPeaksBase {
  constructor (game) {
    super(game, "Teetering Peaks", "Magic Online Promos", "PRM");
  }
}

module.exports = TeeteringPeaks;
