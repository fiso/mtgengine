"use strict";
const Constants = require ("../../../Constants");
const SupremeVerdictBase = require("../setIMA/SupremeVerdict");

class SupremeVerdict extends SupremeVerdictBase {
  constructor (game) {
    super(game, "Supreme Verdict", "Magic Online Promos", "PRM");
  }
}

module.exports = SupremeVerdict;
