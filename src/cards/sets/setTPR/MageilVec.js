"use strict";
const Constants = require ("../../../Constants");
const MageilVecBase = require("../setEXO/MageilVec");

class MageilVec extends MageilVecBase {
  constructor (game) {
    super(game, "Mage il-Vec", "Tempest Remastered", "TPR");
  }
}

module.exports = MageilVec;
