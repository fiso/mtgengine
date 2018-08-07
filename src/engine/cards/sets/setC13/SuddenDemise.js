"use strict";
const Constants = require ("../../../Constants");
const SuddenDemiseBase = require("../setE01/SuddenDemise");

class SuddenDemise extends SuddenDemiseBase {
  constructor (game) {
    super(game, "Sudden Demise", "Commander 2013", "C13");
  }
}

module.exports = SuddenDemise;
