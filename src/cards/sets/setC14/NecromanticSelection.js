"use strict";
const Constants = require ("../../../Constants");
const NecromanticSelectionBase = require("../setC17/NecromanticSelection");

class NecromanticSelection extends NecromanticSelectionBase {
  constructor (game) {
    super(game, "Necromantic Selection", "Commander 2014", "C14");
  }
}

module.exports = NecromanticSelection;
