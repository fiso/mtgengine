"use strict";
const Constants = require ("../../../Constants");
const WesternPaladinBase = require("../set8ED/WesternPaladin");

class WesternPaladin extends WesternPaladinBase {
  constructor (game) {
    super(game, "Western Paladin", "Seventh Edition", "7ED");
  }
}

module.exports = WesternPaladin;
