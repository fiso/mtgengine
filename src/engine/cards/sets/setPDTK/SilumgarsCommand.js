"use strict";
const Constants = require ("../../../Constants");
const SilumgarsCommandBase = require("../setC17/SilumgarsCommand");

class SilumgarsCommand extends SilumgarsCommandBase {
  constructor (game) {
    super(game, "Silumgar's Command", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = SilumgarsCommand;
