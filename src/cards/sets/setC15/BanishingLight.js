"use strict";
const Constants = require ("../../../Constants");
const BanishingLightBase = require("../setCM2/BanishingLight");

class BanishingLight extends BanishingLightBase {
  constructor (game) {
    super(game, "Banishing Light", "Commander 2015", "C15");
  }
}

module.exports = BanishingLight;
