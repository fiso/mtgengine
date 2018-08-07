"use strict";
const Constants = require ("../../../Constants");
const SplinterBase = require("../setBOK/Splinter");

class Splinter extends SplinterBase {
  constructor (game) {
    super(game, "Splinter", "World Championship Decks 2000", "WC00");
  }
}

module.exports = Splinter;
