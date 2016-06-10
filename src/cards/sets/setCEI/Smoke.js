"use strict";
const Constants = require ("../../../Constants");
const SmokeBase = require("../setCED/Smoke");

class Smoke extends SmokeBase {
  constructor (game) {
    super(game, "Smoke", "International Collector's Edition", "CEI");
  }
}

module.exports = Smoke;
