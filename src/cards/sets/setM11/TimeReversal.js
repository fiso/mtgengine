"use strict";
const Constants = require ("../../../Constants");
const TimeReversalBase = require("../setM12/TimeReversal");

class TimeReversal extends TimeReversalBase {
  constructor (game) {
    super(game, "Time Reversal", "Magic 2011", "M11");
  }
}

module.exports = TimeReversal;
