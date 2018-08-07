"use strict";
const Constants = require ("../../../Constants");
const TerminateBase = require("../setC17/Terminate");

class Terminate extends TerminateBase {
  constructor (game) {
    super(game, "Terminate", "Magic Player Rewards 2009", "P09");
  }
}

module.exports = Terminate;
