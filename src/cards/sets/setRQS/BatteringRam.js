"use strict";
const Constants = require ("../../../Constants");
const BatteringRamBase = require("../setATQ/BatteringRam");

class BatteringRam extends BatteringRamBase {
  constructor (game) {
    super(game, "Battering Ram", "Rivals Quick Start Set", "RQS");
  }
}

module.exports = BatteringRam;
