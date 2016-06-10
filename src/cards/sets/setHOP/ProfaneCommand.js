"use strict";
const Constants = require ("../../../Constants");
const ProfaneCommandBase = require("../setC14/ProfaneCommand");

class ProfaneCommand extends ProfaneCommandBase {
  constructor (game) {
    super(game, "Profane Command", "Planechase", "HOP");
  }
}

module.exports = ProfaneCommand;
