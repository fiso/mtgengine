"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeudkillersVerdict extends UnimplementedCard {
  constructor(game) {
    super(game, "Feudkiller's Verdict", "Modern Masters", "MMA");
  }
}

module.exports = FeudkillersVerdict;
