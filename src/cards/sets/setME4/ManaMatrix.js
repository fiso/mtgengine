"use strict";
const Constants = require ("../../../Constants");
const ManaMatrixBase = require("../setLEG/ManaMatrix");

class ManaMatrix extends ManaMatrixBase {
  constructor (game) {
    super(game, "Mana Matrix", "Masters Edition IV", "ME4");
  }
}

module.exports = ManaMatrix;
