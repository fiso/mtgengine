"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LegionsofLimDlBase = require("../setCST/LegionsofLimDl.js");

class LegionsofLimDl extends LegionsofLimDlBase {
  constructor(game) {
    super(game, "Legions of Lim-Dûl", "Ice Age", "ICE");
  }
}

module.exports = LegionsofLimDl;
