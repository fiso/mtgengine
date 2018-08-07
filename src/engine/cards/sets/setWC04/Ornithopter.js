"use strict";
const Constants = require ("../../../Constants");
const OrnithopterBase = require("../setAER/Ornithopter");

class Ornithopter extends OrnithopterBase {
  constructor (game) {
    super(game, "Ornithopter", "World Championship Decks 2004", "WC04");
  }
}

module.exports = Ornithopter;
