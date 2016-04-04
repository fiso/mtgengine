"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LongForgottenGoheiBase = require("../setCHK/LongForgottenGohei.js");

class LongForgottenGohei extends LongForgottenGoheiBase {
  constructor(game) {
    super(game, "Long-Forgotten Gohei", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = LongForgottenGohei;
