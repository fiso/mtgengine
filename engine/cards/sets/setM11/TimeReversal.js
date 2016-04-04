"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TimeReversal extends Card {
  constructor(game) {
    super(game, "Time Reversal", "Magic 2011", "M11");
  }
}

module.exports = TimeReversal;
