"use strict";
const Constants = require ("../../../Constants");
const NemesisTrapBase = require("../setCMD/NemesisTrap");

class NemesisTrap extends NemesisTrapBase {
  constructor (game) {
    super(game, "Nemesis Trap", "Worldwake", "WWK");
  }
}

module.exports = NemesisTrap;
