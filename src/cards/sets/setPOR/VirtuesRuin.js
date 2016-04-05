"use strict";
const Constants = require ("../../../Constants");
const VirtuesRuinBase = require("../setV14/VirtuesRuin");

class VirtuesRuin extends VirtuesRuinBase {
  constructor(game) {
    super(game, "Virtue's Ruin", "Portal", "POR");
  }
}

module.exports = VirtuesRuin;
