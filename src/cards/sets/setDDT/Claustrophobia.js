"use strict";
const Constants = require ("../../../Constants");
const ClaustrophobiaBase = require("../setBBD/Claustrophobia");

class Claustrophobia extends ClaustrophobiaBase {
  constructor (game) {
    super(game, "Claustrophobia", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = Claustrophobia;
