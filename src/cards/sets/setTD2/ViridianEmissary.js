"use strict";
const Constants = require ("../../../Constants");
const ViridianEmissaryBase = require("../setCMA/ViridianEmissary");

class ViridianEmissary extends ViridianEmissaryBase {
  constructor (game) {
    super(game, "Viridian Emissary", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = ViridianEmissary;
