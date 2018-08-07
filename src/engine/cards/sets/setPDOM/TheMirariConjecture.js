"use strict";
const Constants = require ("../../../Constants");
const TheMirariConjectureBase = require("../setDOM/TheMirariConjecture");

class TheMirariConjecture extends TheMirariConjectureBase {
  constructor (game) {
    super(game, "The Mirari Conjecture", "Dominaria Promos", "PDOM");
  }
}

module.exports = TheMirariConjecture;
