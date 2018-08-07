"use strict";
const Constants = require ("../../../Constants");
const PrimalCommandBase = require("../setMM3/PrimalCommand");

class PrimalCommand extends PrimalCommandBase {
  constructor (game) {
    super(game, "Primal Command", "Archenemy", "ARC");
  }
}

module.exports = PrimalCommand;
