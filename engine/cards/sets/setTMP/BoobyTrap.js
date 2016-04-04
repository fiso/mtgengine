"use strict";
const Constants = require ("../../../Constants");
const BoobyTrapBase = require("../set9ED/BoobyTrap");

class BoobyTrap extends BoobyTrapBase {
  constructor(game) {
    super(game, "Booby Trap", "Tempest", "TMP");
  }
}

module.exports = BoobyTrap;
