"use strict";
const Constants = require ("../../../Constants");
const CommanderGrevenilVecBase = require("../setTPR/CommanderGrevenilVec");

class CommanderGrevenilVec extends CommanderGrevenilVecBase {
  constructor (game) {
    super(game, "Commander Greven il-Vec", "Tempest", "TMP");
  }
}

module.exports = CommanderGrevenilVec;
