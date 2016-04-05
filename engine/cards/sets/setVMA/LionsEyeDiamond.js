"use strict";
const Constants = require ("../../../Constants");
const LionsEyeDiamondBase = require("../setMIR/LionsEyeDiamond");

class LionsEyeDiamond extends LionsEyeDiamondBase {
  constructor(game) {
    super(game, "Lion's Eye Diamond", "Vintage Masters", "VMA");
  }
}

module.exports = LionsEyeDiamond;
