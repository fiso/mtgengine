"use strict";
const Constants = require ("../../../Constants");
const LongForgottenGoheiBase = require("../setCHK/LongForgottenGohei");

class LongForgottenGohei extends LongForgottenGoheiBase {
  constructor(game) {
    super(game, "Long-Forgotten Gohei", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = LongForgottenGohei;
