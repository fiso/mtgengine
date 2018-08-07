"use strict";
const Constants = require ("../../../Constants");
const CurseofVerbosityBase = require("../setC17/CurseofVerbosity");

class CurseofVerbosity extends CurseofVerbosityBase {
  constructor (game) {
    super(game, "Curse of Verbosity", "You Make the Cube", "PZ2");
  }
}

module.exports = CurseofVerbosity;
