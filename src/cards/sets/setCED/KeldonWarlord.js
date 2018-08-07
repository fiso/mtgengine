"use strict";
const Constants = require ("../../../Constants");
const KeldonWarlordBase = require("../setMED/KeldonWarlord");

class KeldonWarlord extends KeldonWarlordBase {
  constructor (game) {
    super(game, "Keldon Warlord", "Collectors’ Edition", "CED");
  }
}

module.exports = KeldonWarlord;
