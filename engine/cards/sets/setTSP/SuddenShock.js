"use strict";
const Constants = require ("../../../Constants");
const SuddenShockBase = require("../setMMA/SuddenShock");

class SuddenShock extends SuddenShockBase {
  constructor(game) {
    super(game, "Sudden Shock", "Time Spiral", "TSP");
  }
}

module.exports = SuddenShock;
