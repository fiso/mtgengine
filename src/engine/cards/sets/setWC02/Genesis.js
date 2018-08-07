"use strict";
const Constants = require ("../../../Constants");
const GenesisBase = require("../setVMA/Genesis");

class Genesis extends GenesisBase {
  constructor (game) {
    super(game, "Genesis", "World Championship Decks 2002", "WC02");
  }
}

module.exports = Genesis;
