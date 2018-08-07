"use strict";
const Constants = require ("../../../Constants");
const DeepAnalysisBase = require("../setEMA/DeepAnalysis");

class DeepAnalysis extends DeepAnalysisBase {
  constructor (game) {
    super(game, "Deep Analysis", "Torment", "TOR");
  }
}

module.exports = DeepAnalysis;
