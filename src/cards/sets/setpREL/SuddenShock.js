"use strict";
const Constants = require ("../../../Constants");
const SuddenShockBase = require("../setMMA/SuddenShock");

class SuddenShock extends SuddenShockBase {
  constructor (game) {
    super(game, "Sudden Shock", "Release Events", "PREL");
  }
}

module.exports = SuddenShock;
