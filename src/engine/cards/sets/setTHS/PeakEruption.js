"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PeakEruption extends UnimplementedCard {
  constructor (game) {
    super(game, "Peak Eruption", "Theros", "THS");
  }
}

module.exports = PeakEruption;
