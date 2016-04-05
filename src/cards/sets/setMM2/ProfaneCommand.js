"use strict";
const Constants = require ("../../../Constants");
const ProfaneCommandBase = require("../setC14/ProfaneCommand");

class ProfaneCommand extends ProfaneCommandBase {
  constructor(game) {
    super(game, "Profane Command", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = ProfaneCommand;
