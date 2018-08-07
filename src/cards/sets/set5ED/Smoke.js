"use strict";
const Constants = require ("../../../Constants");
const SmokeBase = require("../setME4/Smoke");

class Smoke extends SmokeBase {
  constructor (game) {
    super(game, "Smoke", "Fifth Edition", "5ED");
  }
}

module.exports = Smoke;
