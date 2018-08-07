"use strict";
const Constants = require ("../../../Constants");
const LionsEyeDiamondBase = require("../setVMA/LionsEyeDiamond");

class LionsEyeDiamond extends LionsEyeDiamondBase {
  constructor (game) {
    super(game, "Lion's Eye Diamond", "Mirage", "MIR");
  }
}

module.exports = LionsEyeDiamond;
