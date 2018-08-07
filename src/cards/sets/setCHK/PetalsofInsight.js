"use strict";
const Constants = require ("../../../Constants");
const PetalsofInsightBase = require("../setMMA/PetalsofInsight");

class PetalsofInsight extends PetalsofInsightBase {
  constructor (game) {
    super(game, "Petals of Insight", "Champions of Kamigawa", "CHK");
  }
}

module.exports = PetalsofInsight;
