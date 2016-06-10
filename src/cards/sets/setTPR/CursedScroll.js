"use strict";
const Constants = require ("../../../Constants");
const CursedScrollBase = require("../setTMP/CursedScroll");

class CursedScroll extends CursedScrollBase {
  constructor (game) {
    super(game, "Cursed Scroll", "Tempest Remastered", "TPR");
  }
}

module.exports = CursedScroll;
