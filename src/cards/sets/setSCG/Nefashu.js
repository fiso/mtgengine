"use strict";
const Constants = require ("../../../Constants");
const NefashuBase = require("../setHOP/Nefashu");

class Nefashu extends NefashuBase {
  constructor (game) {
    super(game, "Nefashu", "Scourge", "SCG");
  }
}

module.exports = Nefashu;
