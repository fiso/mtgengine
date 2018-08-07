"use strict";
const Constants = require ("../../../Constants");
const WelkinTernBase = require("../setGS1/WelkinTern");

class WelkinTern extends WelkinTernBase {
  constructor (game) {
    super(game, "Welkin Tern", "Zendikar", "ZEN");
  }
}

module.exports = WelkinTern;
