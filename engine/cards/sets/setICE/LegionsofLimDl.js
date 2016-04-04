"use strict";
const Constants = require ("../../../Constants");
const LegionsofLimDlBase = require("../setCST/LegionsofLimDl");

class LegionsofLimDl extends LegionsofLimDlBase {
  constructor(game) {
    super(game, "Legions of Lim-Dûl", "Ice Age", "ICE");
  }
}

module.exports = LegionsofLimDl;
