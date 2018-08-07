"use strict";
const Constants = require ("../../../Constants");
const SkulkingGhostBase = require("../setEMA/SkulkingGhost");

class SkulkingGhost extends SkulkingGhostBase {
  constructor (game) {
    super(game, "Skulking Ghost", "Mirage", "MIR");
  }
}

module.exports = SkulkingGhost;
