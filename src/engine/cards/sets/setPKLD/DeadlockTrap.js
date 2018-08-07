"use strict";
const Constants = require ("../../../Constants");
const DeadlockTrapBase = require("../setKLD/DeadlockTrap");

class DeadlockTrap extends DeadlockTrapBase {
  constructor (game) {
    super(game, "Deadlock Trap", "Kaladesh Promos", "PKLD");
  }
}

module.exports = DeadlockTrap;
