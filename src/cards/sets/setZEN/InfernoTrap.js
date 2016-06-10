"use strict";
const Constants = require ("../../../Constants");
const InfernoTrapBase = require("../setARC/InfernoTrap");

class InfernoTrap extends InfernoTrapBase {
  constructor (game) {
    super(game, "Inferno Trap", "Zendikar", "ZEN");
  }
}

module.exports = InfernoTrap;
