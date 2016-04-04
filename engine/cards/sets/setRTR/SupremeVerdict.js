"use strict";
const Constants = require ("../../../Constants");
const SupremeVerdictBase = require("../setpMEI/SupremeVerdict");

class SupremeVerdict extends SupremeVerdictBase {
  constructor(game) {
    super(game, "Supreme Verdict", "Return to Ravnica", "RTR");
  }
}

module.exports = SupremeVerdict;
