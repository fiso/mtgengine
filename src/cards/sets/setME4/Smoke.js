"use strict";
const Constants = require ("../../../Constants");
const SmokeBase = require("../setCED/Smoke");

class Smoke extends SmokeBase {
  constructor (game) {
    super(game, "Smoke", "Masters Edition IV", "ME4");
  }
}

module.exports = Smoke;
