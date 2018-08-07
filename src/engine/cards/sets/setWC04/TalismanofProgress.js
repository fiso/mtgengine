"use strict";
const Constants = require ("../../../Constants");
const TalismanofProgressBase = require("../setTD2/TalismanofProgress");

class TalismanofProgress extends TalismanofProgressBase {
  constructor (game) {
    super(game, "Talisman of Progress", "World Championship Decks 2004", "WC04");
  }
}

module.exports = TalismanofProgress;
