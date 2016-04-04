"use strict";
const Constants = require ("../../../Constants");
const NorthernPaladinBase = require("../setCED/NorthernPaladin");

class NorthernPaladin extends NorthernPaladinBase {
  constructor(game) {
    super(game, "Northern Paladin", "Limited Edition Beta", "LEB");
  }
}

module.exports = NorthernPaladin;
