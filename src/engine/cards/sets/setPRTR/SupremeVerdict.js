"use strict";
const Constants = require ("../../../Constants");
const SupremeVerdictBase = require("../setIMA/SupremeVerdict");

class SupremeVerdict extends SupremeVerdictBase {
  constructor (game) {
    super(game, "Supreme Verdict", "Return to Ravnica Promos", "PRTR");
  }
}

module.exports = SupremeVerdict;
