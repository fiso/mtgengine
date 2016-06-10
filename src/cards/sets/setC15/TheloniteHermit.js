"use strict";
const Constants = require ("../../../Constants");
const TheloniteHermitBase = require("../setARC/TheloniteHermit");

class TheloniteHermit extends TheloniteHermitBase {
  constructor (game) {
    super(game, "Thelonite Hermit", "Commander 2015", "C15");
  }
}

module.exports = TheloniteHermit;
