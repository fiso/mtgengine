"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CalloftheConclaveBase = require("../setpFNM/CalloftheConclave.js");

class CalloftheConclave extends CalloftheConclaveBase {
  constructor(game) {
    super(game, "Call of the Conclave", "Return to Ravnica", "RTR");
  }
}

module.exports = CalloftheConclave;
