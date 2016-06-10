"use strict";
const Constants = require ("../../../Constants");
const NorthernPaladinBase = require("../setCED/NorthernPaladin");

class NorthernPaladin extends NorthernPaladinBase {
  constructor (game) {
    super(game, "Northern Paladin", "Limited Edition Alpha", "LEA");
  }
}

module.exports = NorthernPaladin;
