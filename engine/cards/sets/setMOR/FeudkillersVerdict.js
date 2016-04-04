"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FeudkillersVerdictBase = require("../setMMA/FeudkillersVerdict.js");

class FeudkillersVerdict extends FeudkillersVerdictBase {
  constructor(game) {
    super(game, "Feudkiller's Verdict", "Morningtide", "MOR");
  }
}

module.exports = FeudkillersVerdict;
