"use strict";
const Constants = require ("../../../Constants");
const BloodcrazedPaladinBase = require("../setXLN/BloodcrazedPaladin");

class BloodcrazedPaladin extends BloodcrazedPaladinBase {
  constructor (game) {
    super(game, "Bloodcrazed Paladin", "Ixalan Promos", "PXLN");
  }
}

module.exports = BloodcrazedPaladin;
