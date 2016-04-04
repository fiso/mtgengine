"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RuleofLawBase = require("../setMRD/RuleofLaw.js");

class RuleofLaw extends RuleofLawBase {
  constructor(game) {
    super(game, "Rule of Law", "Tenth Edition", "10E");
  }
}

module.exports = RuleofLaw;
