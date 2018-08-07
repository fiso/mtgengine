"use strict";
const Constants = require ("../../../Constants");
const CalltheBloodlineBase = require("../setSOI/CalltheBloodline");

class CalltheBloodline extends CalltheBloodlineBase {
  constructor (game) {
    super(game, "Call the Bloodline", "Friday Night Magic 2016", "F16");
  }
}

module.exports = CalltheBloodline;
