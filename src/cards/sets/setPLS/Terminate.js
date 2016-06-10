"use strict";
const Constants = require ("../../../Constants");
const TerminateBase = require("../setARB/Terminate");

class Terminate extends TerminateBase {
  constructor (game) {
    super(game, "Terminate", "Planeshift", "PLS");
  }
}

module.exports = Terminate;
