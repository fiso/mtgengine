"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ManaMatrixBase = require("../setLEG/ManaMatrix.js");

class ManaMatrix extends ManaMatrixBase {
  constructor(game) {
    super(game, "Mana Matrix", "Masters Edition IV", "ME4");
  }
}

module.exports = ManaMatrix;
