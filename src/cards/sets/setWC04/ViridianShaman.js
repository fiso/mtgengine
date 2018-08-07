"use strict";
const Constants = require ("../../../Constants");
const ViridianShamanBase = require("../setDDU/ViridianShaman");

class ViridianShaman extends ViridianShamanBase {
  constructor (game) {
    super(game, "Viridian Shaman", "World Championship Decks 2004", "WC04");
  }
}

module.exports = ViridianShaman;
