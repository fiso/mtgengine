"use strict";
const Constants = require ("../../../Constants");
const CalloftheConclaveBase = require("../setMM3/CalloftheConclave");

class CalloftheConclave extends CalloftheConclaveBase {
  constructor (game) {
    super(game, "Call of the Conclave", "Return to Ravnica", "RTR");
  }
}

module.exports = CalloftheConclave;
