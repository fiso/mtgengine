"use strict";
const Constants = require ("../../../Constants");
const MyrSireBase = require("../setCM2/MyrSire");

class MyrSire extends MyrSireBase {
  constructor (game) {
    super(game, "Myr Sire", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = MyrSire;
