"use strict";
const Constants = require ("../../../Constants");
const BanishingStrokeBase = require("../setC18/BanishingStroke");

class BanishingStroke extends BanishingStrokeBase {
  constructor (game) {
    super(game, "Banishing Stroke", "Modern Masters 2017", "MM3");
  }
}

module.exports = BanishingStroke;
