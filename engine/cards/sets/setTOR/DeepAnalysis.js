"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeepAnalysisBase = require("../setC13/DeepAnalysis.js");

class DeepAnalysis extends DeepAnalysisBase {
  constructor(game) {
    super(game, "Deep Analysis", "Torment", "TOR");
  }
}

module.exports = DeepAnalysis;
