"use strict";
const Constants = require ("../../../Constants");
const DeepAnalysisBase = require("../setEMA/DeepAnalysis");

class DeepAnalysis extends DeepAnalysisBase {
  constructor (game) {
    super(game, "Deep Analysis", "World Championship Decks 2002", "WC02");
  }
}

module.exports = DeepAnalysis;
