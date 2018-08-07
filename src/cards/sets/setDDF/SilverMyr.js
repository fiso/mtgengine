"use strict";
const Constants = require ("../../../Constants");
const SilverMyrBase = require("../setTD2/SilverMyr");

class SilverMyr extends SilverMyrBase {
  constructor (game) {
    super(game, "Silver Myr", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = SilverMyr;
