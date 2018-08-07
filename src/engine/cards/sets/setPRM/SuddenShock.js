"use strict";
const Constants = require ("../../../Constants");
const SuddenShockBase = require("../setMMA/SuddenShock");

class SuddenShock extends SuddenShockBase {
  constructor (game) {
    super(game, "Sudden Shock", "Magic Online Promos", "PRM");
  }
}

module.exports = SuddenShock;
