"use strict";
const Constants = require ("../../../Constants");
const PentadPrismBase = require("../setHOP/PentadPrism");

class PentadPrism extends PentadPrismBase {
  constructor (game) {
    super(game, "Pentad Prism", "World Championship Decks 2004", "WC04");
  }
}

module.exports = PentadPrism;
