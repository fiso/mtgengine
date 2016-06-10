"use strict";
const Constants = require ("../../../Constants");
const NorthernPaladinBase = require("../setCED/NorthernPaladin");

class NorthernPaladin extends NorthernPaladinBase {
  constructor (game) {
    super(game, "Northern Paladin", "Seventh Edition", "7ED");
  }
}

module.exports = NorthernPaladin;
