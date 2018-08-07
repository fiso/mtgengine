"use strict";
const Constants = require ("../../../Constants");
const ThoughtcastBase = require("../setMM2/Thoughtcast");

class Thoughtcast extends ThoughtcastBase {
  constructor (game) {
    super(game, "Thoughtcast", "World Championship Decks 2004", "WC04");
  }
}

module.exports = Thoughtcast;
