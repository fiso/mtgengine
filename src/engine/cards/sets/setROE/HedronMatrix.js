"use strict";
const Constants = require ("../../../Constants");
const HedronMatrixBase = require("../setCN2/HedronMatrix");

class HedronMatrix extends HedronMatrixBase {
  constructor (game) {
    super(game, "Hedron Matrix", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = HedronMatrix;
