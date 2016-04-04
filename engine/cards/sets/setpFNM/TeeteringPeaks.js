"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TeeteringPeaks extends Card {
  constructor(game) {
    super(game, "Teetering Peaks", "Friday Night Magic", "pFNM");
  }
}

module.exports = TeeteringPeaks;
