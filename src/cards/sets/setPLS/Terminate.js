"use strict";
const Constants = require ("../../../Constants");
const TerminateBase = require("../setC17/Terminate");

class Terminate extends TerminateBase {
  constructor (game) {
    super(game, "Terminate", "Planeshift", "PLS");
  }
}

module.exports = Terminate;
