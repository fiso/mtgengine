"use strict";
const Constants = require ("../../../Constants");
const LongForgottenGoheiBase = require("../setMM2/LongForgottenGohei");

class LongForgottenGohei extends LongForgottenGoheiBase {
  constructor (game) {
    super(game, "Long-Forgotten Gohei", "Champions of Kamigawa", "CHK");
  }
}

module.exports = LongForgottenGohei;
