"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SupremeVerdictBase = require("../setpMEI/SupremeVerdict.js");

class SupremeVerdict extends SupremeVerdictBase {
  constructor(game) {
    super(game, "Supreme Verdict", "Return to Ravnica", "RTR");
  }
}

module.exports = SupremeVerdict;
