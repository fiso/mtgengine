"use strict";
const Constants = require ("../../../Constants");
const CursedScrollBase = require("../setTPR/CursedScroll");

class CursedScroll extends CursedScrollBase {
  constructor (game) {
    super(game, "Cursed Scroll", "World Championship Decks 1999", "WC99");
  }
}

module.exports = CursedScroll;
