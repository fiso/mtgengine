"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FuneralCharm extends Card {
  constructor(game) {
    super(game, "Funeral Charm", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = FuneralCharm;
