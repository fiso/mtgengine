"use strict";
const Constants = require ("../../../Constants");
const MageilVecBase = require("../setTPR/MageilVec");

class MageilVec extends MageilVecBase {
  constructor (game) {
    super(game, "Mage il-Vec", "Exodus", "EXO");
  }
}

module.exports = MageilVec;
