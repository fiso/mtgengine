"use strict";
const Constants = require ("../../../Constants");
const StoicRebuttalBase = require("../setMM2/StoicRebuttal");

class StoicRebuttal extends StoicRebuttalBase {
  constructor (game) {
    super(game, "Stoic Rebuttal", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = StoicRebuttal;
