"use strict";
const Constants = require ("../../../Constants");
const SmokeBase = require("../setCED/Smoke");

class Smoke extends SmokeBase {
  constructor(game) {
    super(game, "Smoke", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Smoke;
