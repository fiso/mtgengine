"use strict";
const Constants = require ("../../../Constants");
const BanishingLightBase = require("../setCM2/BanishingLight");

class BanishingLight extends BanishingLightBase {
  constructor (game) {
    super(game, "Banishing Light", "Friday Night Magic 2014", "F14");
  }
}

module.exports = BanishingLight;
