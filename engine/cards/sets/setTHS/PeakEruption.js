"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PeakEruption extends Card {
  constructor(game) {
    super(game, "Peak Eruption", "Theros", "THS");
  }
}

module.exports = PeakEruption;
