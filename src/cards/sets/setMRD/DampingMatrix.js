"use strict";
const Constants = require ("../../../Constants");
const DampingMatrixBase = require("../setMM3/DampingMatrix");

class DampingMatrix extends DampingMatrixBase {
  constructor (game) {
    super(game, "Damping Matrix", "Mirrodin", "MRD");
  }
}

module.exports = DampingMatrix;
