"use strict";
const Constants = require ("../../../Constants");
const TerminateBase = require("../setC17/Terminate");

class Terminate extends TerminateBase {
  constructor (game) {
    super(game, "Terminate", "Alara Reborn", "ARB");
  }
}

module.exports = Terminate;
