"use strict";
const Constants = require ("../../../Constants");
const NorthernPaladinBase = require("../set7ED/NorthernPaladin");

class NorthernPaladin extends NorthernPaladinBase {
  constructor (game) {
    super(game, "Northern Paladin", "Fourth Edition", "4ED");
  }
}

module.exports = NorthernPaladin;
