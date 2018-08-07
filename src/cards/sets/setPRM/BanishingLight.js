"use strict";
const Constants = require ("../../../Constants");
const BanishingLightBase = require("../setCM2/BanishingLight");

class BanishingLight extends BanishingLightBase {
  constructor (game) {
    super(game, "Banishing Light", "Magic Online Promos", "PRM");
  }
}

module.exports = BanishingLight;
