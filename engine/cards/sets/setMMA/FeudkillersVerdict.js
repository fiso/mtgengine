"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FeudkillersVerdict extends Card {
  constructor(game) {
    super(game, "Feudkiller's Verdict", "Modern Masters", "MMA");
  }
}

module.exports = FeudkillersVerdict;
