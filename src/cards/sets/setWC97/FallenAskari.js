"use strict";
const Constants = require ("../../../Constants");
const FallenAskariBase = require("../setVMA/FallenAskari");

class FallenAskari extends FallenAskariBase {
  constructor (game) {
    super(game, "Fallen Askari", "World Championship Decks 1997", "WC97");
  }
}

module.exports = FallenAskari;
