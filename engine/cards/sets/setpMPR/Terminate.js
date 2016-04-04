"use strict";
const Constants = require ("../../../Constants");
const TerminateBase = require("../setARB/Terminate");

class Terminate extends TerminateBase {
  constructor(game) {
    super(game, "Terminate", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Terminate;
