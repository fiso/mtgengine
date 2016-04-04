"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InfernoTrapBase = require("../setARC/InfernoTrap.js");

class InfernoTrap extends InfernoTrapBase {
  constructor(game) {
    super(game, "Inferno Trap", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = InfernoTrap;
