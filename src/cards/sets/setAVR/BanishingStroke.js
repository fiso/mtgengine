"use strict";
const Constants = require ("../../../Constants");
const BanishingStrokeBase = require("../setC18/BanishingStroke");

class BanishingStroke extends BanishingStrokeBase {
  constructor (game) {
    super(game, "Banishing Stroke", "Avacyn Restored", "AVR");
  }
}

module.exports = BanishingStroke;
