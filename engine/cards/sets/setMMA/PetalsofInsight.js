"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PetalsofInsightBase = require("../setCHK/PetalsofInsight.js");

class PetalsofInsight extends PetalsofInsightBase {
  constructor(game) {
    super(game, "Petals of Insight", "Modern Masters", "MMA");
  }
}

module.exports = PetalsofInsight;
