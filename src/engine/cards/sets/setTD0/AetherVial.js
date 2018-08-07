"use strict";
const Constants = require ("../../../Constants");
const AetherVialBase = require("../setIMA/AetherVial");

class AetherVial extends AetherVialBase {
  constructor (game) {
    super(game, "Aether Vial", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = AetherVial;
