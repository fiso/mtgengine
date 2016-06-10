"use strict";
const Constants = require ("../../../Constants");
const KeldonWarlordBase = require("../setCED/KeldonWarlord");

class KeldonWarlord extends KeldonWarlordBase {
  constructor (game) {
    super(game, "Keldon Warlord", "International Collector's Edition", "CEI");
  }
}

module.exports = KeldonWarlord;
