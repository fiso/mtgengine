"use strict";
const Constants = require ("../../../Constants");
const SulfuricVortexBase = require("../setEMA/SulfuricVortex");

class SulfuricVortex extends SulfuricVortexBase {
  constructor (game) {
    super(game, "Sulfuric Vortex", "World Championship Decks 2003", "WC03");
  }
}

module.exports = SulfuricVortex;
