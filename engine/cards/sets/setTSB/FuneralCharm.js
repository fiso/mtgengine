"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FuneralCharm extends UnimplementedCard {
  constructor(game) {
    super(game, "Funeral Charm", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = FuneralCharm;
