"use strict";
const Constants = require ("../../../Constants");
const TheloniteHermitBase = require("../setARC/TheloniteHermit");

class TheloniteHermit extends TheloniteHermitBase {
  constructor(game) {
    super(game, "Thelonite Hermit", "Time Spiral", "TSP");
  }
}

module.exports = TheloniteHermit;
