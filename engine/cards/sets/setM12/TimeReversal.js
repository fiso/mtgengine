"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TimeReversalBase = require("../setM11/TimeReversal.js");

class TimeReversal extends TimeReversalBase {
  constructor(game) {
    super(game, "Time Reversal", "Magic 2012", "M12");
  }
}

module.exports = TimeReversal;
