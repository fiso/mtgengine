"use strict";
const Constants = require ("../../../Constants");
const LightwielderPaladinBase = require("../setE01/LightwielderPaladin");

class LightwielderPaladin extends LightwielderPaladinBase {
  constructor (game) {
    super(game, "Lightwielder Paladin", "Magic 2010", "M10");
  }
}

module.exports = LightwielderPaladin;
