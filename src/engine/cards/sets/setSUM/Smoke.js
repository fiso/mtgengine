"use strict";
const Constants = require ("../../../Constants");
const SmokeBase = require("../setME4/Smoke");

class Smoke extends SmokeBase {
  constructor (game) {
    super(game, "Smoke", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = Smoke;
