"use strict";
const Constants = require ("../../../Constants");
const CursedScrollBase = require("../setTPR/CursedScroll");

class CursedScroll extends CursedScrollBase {
  constructor (game) {
    super(game, "Cursed Scroll", "Vintage Masters", "VMA");
  }
}

module.exports = CursedScroll;
