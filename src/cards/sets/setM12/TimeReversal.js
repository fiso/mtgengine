"use strict";
const Constants = require ("../../../Constants");
const TimeReversalBase = require("../setM11/TimeReversal");

class TimeReversal extends TimeReversalBase {
  constructor (game) {
    super(game, "Time Reversal", "Magic 2012", "M12");
  }
}

module.exports = TimeReversal;
