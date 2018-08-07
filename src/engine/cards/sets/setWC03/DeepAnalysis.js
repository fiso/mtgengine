"use strict";
const Constants = require ("../../../Constants");
const DeepAnalysisBase = require("../setEMA/DeepAnalysis");

class DeepAnalysis extends DeepAnalysisBase {
  constructor (game) {
    super(game, "Deep Analysis", "World Championship Decks 2003", "WC03");
  }
}

module.exports = DeepAnalysis;
