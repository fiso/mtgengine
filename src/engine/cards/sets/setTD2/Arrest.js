"use strict";
const Constants = require ("../../../Constants");
const ArrestBase = require("../setMM2/Arrest");

class Arrest extends ArrestBase {
  constructor (game) {
    super(game, "Arrest", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = Arrest;
