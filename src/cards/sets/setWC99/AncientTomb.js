"use strict";
const Constants = require ("../../../Constants");
const AncientTombBase = require("../setEXP/AncientTomb");

class AncientTomb extends AncientTombBase {
  constructor (game) {
    super(game, "Ancient Tomb", "World Championship Decks 1999", "WC99");
  }
}

module.exports = AncientTomb;
