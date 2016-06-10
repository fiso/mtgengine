"use strict";
const Constants = require ("../../../Constants");
const RuleofLawBase = require("../setMRD/RuleofLaw");

class RuleofLaw extends RuleofLawBase {
  constructor (game) {
    super(game, "Rule of Law", "Tenth Edition", "10E");
  }
}

module.exports = RuleofLaw;
