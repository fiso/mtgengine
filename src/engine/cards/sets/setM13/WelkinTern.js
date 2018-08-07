"use strict";
const Constants = require ("../../../Constants");
const WelkinTernBase = require("../setGS1/WelkinTern");

class WelkinTern extends WelkinTernBase {
  constructor (game) {
    super(game, "Welkin Tern", "Magic 2013", "M13");
  }
}

module.exports = WelkinTern;
