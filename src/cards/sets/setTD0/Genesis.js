"use strict";
const Constants = require ("../../../Constants");
const GenesisBase = require("../setVMA/Genesis");

class Genesis extends GenesisBase {
  constructor (game) {
    super(game, "Genesis", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = Genesis;
