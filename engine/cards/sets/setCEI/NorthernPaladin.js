"use strict";
const Constants = require ("../../../Constants");
const NorthernPaladinBase = require("../setCED/NorthernPaladin");

class NorthernPaladin extends NorthernPaladinBase {
  constructor(game) {
    super(game, "Northern Paladin", "International Collector's Edition", "CEI");
  }
}

module.exports = NorthernPaladin;
