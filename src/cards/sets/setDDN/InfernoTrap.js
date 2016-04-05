"use strict";
const Constants = require ("../../../Constants");
const InfernoTrapBase = require("../setARC/InfernoTrap");

class InfernoTrap extends InfernoTrapBase {
  constructor(game) {
    super(game, "Inferno Trap", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = InfernoTrap;
