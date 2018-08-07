"use strict";
const Constants = require ("../../../Constants");
const RewindBase = require("../setMM3/Rewind");

class Rewind extends RewindBase {
  constructor (game) {
    super(game, "Rewind", "World Championship Decks 2004", "WC04");
  }
}

module.exports = Rewind;
