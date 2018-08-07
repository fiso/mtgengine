"use strict";
const Constants = require ("../../../Constants");
const ManaMatrixBase = require("../setME4/ManaMatrix");

class ManaMatrix extends ManaMatrixBase {
  constructor (game) {
    super(game, "Mana Matrix", "Legends", "LEG");
  }
}

module.exports = ManaMatrix;
