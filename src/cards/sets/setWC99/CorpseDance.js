"use strict";
const Constants = require ("../../../Constants");
const CorpseDanceBase = require("../setTPR/CorpseDance");

class CorpseDance extends CorpseDanceBase {
  constructor (game) {
    super(game, "Corpse Dance", "World Championship Decks 1999", "WC99");
  }
}

module.exports = CorpseDance;
