"use strict";
const Constants = require ("../../../Constants");
const FeudkillersVerdictBase = require("../setMMA/FeudkillersVerdict");

class FeudkillersVerdict extends FeudkillersVerdictBase {
  constructor(game) {
    super(game, "Feudkiller's Verdict", "Morningtide", "MOR");
  }
}

module.exports = FeudkillersVerdict;
