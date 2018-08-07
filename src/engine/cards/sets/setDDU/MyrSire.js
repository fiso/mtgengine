"use strict";
const Constants = require ("../../../Constants");
const MyrSireBase = require("../setCM2/MyrSire");

class MyrSire extends MyrSireBase {
  constructor (game) {
    super(game, "Myr Sire", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = MyrSire;
