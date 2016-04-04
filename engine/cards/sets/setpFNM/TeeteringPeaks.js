"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TeeteringPeaks extends UnimplementedCard {
  constructor(game) {
    super(game, "Teetering Peaks", "Friday Night Magic", "pFNM");
  }
}

module.exports = TeeteringPeaks;
