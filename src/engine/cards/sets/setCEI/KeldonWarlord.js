"use strict";
const Constants = require ("../../../Constants");
const KeldonWarlordBase = require("../setMED/KeldonWarlord");

class KeldonWarlord extends KeldonWarlordBase {
  constructor (game) {
    super(game, "Keldon Warlord", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = KeldonWarlord;
