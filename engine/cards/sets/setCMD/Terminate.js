"use strict";
const Constants = require ("../../../Constants");
const TerminateBase = require("../setARB/Terminate");

class Terminate extends TerminateBase {
  constructor(game) {
    super(game, "Terminate", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Terminate;
