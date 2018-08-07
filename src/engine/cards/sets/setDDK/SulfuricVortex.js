"use strict";
const Constants = require ("../../../Constants");
const SulfuricVortexBase = require("../setEMA/SulfuricVortex");

class SulfuricVortex extends SulfuricVortexBase {
  constructor (game) {
    super(game, "Sulfuric Vortex", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = SulfuricVortex;
