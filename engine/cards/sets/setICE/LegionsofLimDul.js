"use strict";
const Constants = require ("../../../Constants");
const LegionsofLimDulBase = require("../setCST/LegionsofLimDul");

class LegionsofLimDul extends LegionsofLimDulBase {
  constructor(game) {
    super(game, "Legions of Lim-Dûl", "Ice Age", "ICE");
  }
}

module.exports = LegionsofLimDul;
