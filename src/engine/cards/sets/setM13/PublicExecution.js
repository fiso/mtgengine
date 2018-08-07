"use strict";
const Constants = require ("../../../Constants");
const PublicExecutionBase = require("../setCN2/PublicExecution");

class PublicExecution extends PublicExecutionBase {
  constructor (game) {
    super(game, "Public Execution", "Magic 2013", "M13");
  }
}

module.exports = PublicExecution;
