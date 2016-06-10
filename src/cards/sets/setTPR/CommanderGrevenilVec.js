"use strict";
const Constants = require ("../../../Constants");
const CommanderGrevenilVecBase = require("../setTMP/CommanderGrevenilVec");

class CommanderGrevenilVec extends CommanderGrevenilVecBase {
  constructor (game) {
    super(game, "Commander Greven il-Vec", "Tempest Remastered", "TPR");
  }
}

module.exports = CommanderGrevenilVec;
