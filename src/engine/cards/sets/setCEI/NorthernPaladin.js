"use strict";
const Constants = require ("../../../Constants");
const NorthernPaladinBase = require("../set7ED/NorthernPaladin");

class NorthernPaladin extends NorthernPaladinBase {
  constructor (game) {
    super(game, "Northern Paladin", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = NorthernPaladin;
