"use strict";
const Constants = require ("../../../Constants");
const SouthernPaladinBase = require("../set7ED/SouthernPaladin");

class SouthernPaladin extends SouthernPaladinBase {
  constructor(game) {
    super(game, "Southern Paladin", "Weatherlight", "WTH");
  }
}

module.exports = SouthernPaladin;
