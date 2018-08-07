"use strict";
const Constants = require ("../../../Constants");
const NorthernPaladinBase = require("../set7ED/NorthernPaladin");

class NorthernPaladin extends NorthernPaladinBase {
  constructor (game) {
    super(game, "Northern Paladin", "Unlimited Edition", "2ED");
  }
}

module.exports = NorthernPaladin;
