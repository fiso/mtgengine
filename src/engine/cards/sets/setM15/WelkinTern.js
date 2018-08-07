"use strict";
const Constants = require ("../../../Constants");
const WelkinTernBase = require("../setGS1/WelkinTern");

class WelkinTern extends WelkinTernBase {
  constructor (game) {
    super(game, "Welkin Tern", "Magic 2015", "M15");
  }
}

module.exports = WelkinTern;
