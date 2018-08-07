"use strict";
const Constants = require ("../../../Constants");
const CalltheBloodlineBase = require("../setSOI/CalltheBloodline");

class CalltheBloodline extends CalltheBloodlineBase {
  constructor (game) {
    super(game, "Call the Bloodline", "Magic Online Promos", "PRM");
  }
}

module.exports = CalltheBloodline;
