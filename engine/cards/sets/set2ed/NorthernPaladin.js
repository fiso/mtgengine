"use strict";
const Constants = require ("../../../Constants");
const NorthernPaladinBase = require("../setCED/NorthernPaladin");

class NorthernPaladin extends NorthernPaladinBase {
  constructor(game) {
    super(game, "Northern Paladin", "Unlimited Edition", "2ED");
  }
}

module.exports = NorthernPaladin;
