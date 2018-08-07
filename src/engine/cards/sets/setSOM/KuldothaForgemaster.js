"use strict";
const Constants = require ("../../../Constants");
const KuldothaForgemasterBase = require("../setTD2/KuldothaForgemaster");

class KuldothaForgemaster extends KuldothaForgemasterBase {
  constructor (game) {
    super(game, "Kuldotha Forgemaster", "Scars of Mirrodin", "SOM");
  }
}

module.exports = KuldothaForgemaster;
