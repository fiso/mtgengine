"use strict";
const Constants = require ("../../../Constants");
const ProfaneCommandBase = require("../setMM2/ProfaneCommand");

class ProfaneCommand extends ProfaneCommandBase {
  constructor (game) {
    super(game, "Profane Command", "Commander 2014", "C14");
  }
}

module.exports = ProfaneCommand;
