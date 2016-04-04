"use strict";
const Constants = require ("../../../Constants");
const ReviveBase = require("../set8ED/Revive");

class Revive extends ReviveBase {
  constructor(game) {
    super(game, "Revive", "Mercadian Masques", "MMQ");
  }
}

module.exports = Revive;
