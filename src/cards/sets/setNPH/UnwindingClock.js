"use strict";
const Constants = require ("../../../Constants");
const UnwindingClockBase = require("../setC18/UnwindingClock");

class UnwindingClock extends UnwindingClockBase {
  constructor (game) {
    super(game, "Unwinding Clock", "New Phyrexia", "NPH");
  }
}

module.exports = UnwindingClock;
