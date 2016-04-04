"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeepAnalysisBase = require("../setC13/DeepAnalysis.js");

class DeepAnalysis extends DeepAnalysisBase {
  constructor(game) {
    super(game, "Deep Analysis", "Friday Night Magic", "pFNM");
  }
}

module.exports = DeepAnalysis;
