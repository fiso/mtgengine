"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SouthernPaladinBase = require("../set7ED/SouthernPaladin.js");

class SouthernPaladin extends SouthernPaladinBase {
  constructor(game) {
    super(game, "Southern Paladin", "Weatherlight", "WTH");
  }
}

module.exports = SouthernPaladin;
