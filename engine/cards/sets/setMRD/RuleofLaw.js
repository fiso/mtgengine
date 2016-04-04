"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RuleofLaw extends Card {
  constructor(game) {
    super(game, "Rule of Law", "Mirrodin", "MRD");
  }
}

module.exports = RuleofLaw;
