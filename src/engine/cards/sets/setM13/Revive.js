"use strict";
const Constants = require ("../../../Constants");
const ReviveBase = require("../setMM3/Revive");

class Revive extends ReviveBase {
  constructor (game) {
    super(game, "Revive", "Magic 2013", "M13");
  }
}

module.exports = Revive;
