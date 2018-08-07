"use strict";
const Constants = require ("../../../Constants");
const EraseBase = require("../setKTK/Erase");

class Erase extends EraseBase {
  constructor (game) {
    super(game, "Erase", "World Championship Decks 2000", "WC00");
  }
}

module.exports = Erase;
