"use strict";
const Constants = require ("../../../Constants");
const NorthernPaladinBase = require("../setCED/NorthernPaladin");

class NorthernPaladin extends NorthernPaladinBase {
  constructor (game) {
    super(game, "Northern Paladin", "Fourth Edition", "4ED");
  }
}

module.exports = NorthernPaladin;
