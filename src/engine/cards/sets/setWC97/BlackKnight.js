"use strict";
const Constants = require ("../../../Constants");
const BlackKnightBase = require("../setME4/BlackKnight");

class BlackKnight extends BlackKnightBase {
  constructor (game) {
    super(game, "Black Knight", "World Championship Decks 1997", "WC97");
  }
}

module.exports = BlackKnight;
