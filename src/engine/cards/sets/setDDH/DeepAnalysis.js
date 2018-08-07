"use strict";
const Constants = require ("../../../Constants");
const DeepAnalysisBase = require("../setEMA/DeepAnalysis");

class DeepAnalysis extends DeepAnalysisBase {
  constructor (game) {
    super(game, "Deep Analysis", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = DeepAnalysis;
