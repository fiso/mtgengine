"use strict";
const Constants = require ("../../../Constants");
const BanishingLightBase = require("../setC15/BanishingLight");

class BanishingLight extends BanishingLightBase {
  constructor(game) {
    super(game, "Banishing Light", "Journey into Nyx", "JOU");
  }
}

module.exports = BanishingLight;
