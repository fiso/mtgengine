"use strict";
const Constants = require ("../../../Constants");
const DeepAnalysisBase = require("../setEMA/DeepAnalysis");

class DeepAnalysis extends DeepAnalysisBase {
  constructor (game) {
    super(game, "Deep Analysis", "Magic Online Promos", "PRM");
  }
}

module.exports = DeepAnalysis;
