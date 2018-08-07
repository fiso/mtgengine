"use strict";
const Constants = require ("../../../Constants");
const InnocentBloodBase = require("../setE02/InnocentBlood");

class InnocentBlood extends InnocentBloodBase {
  constructor (game) {
    super(game, "Innocent Blood", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = InnocentBlood;
