"use strict";
const Constants = require ("../../../Constants");
const MulldrifterBase = require("../setC18/Mulldrifter");

class Mulldrifter extends MulldrifterBase {
  constructor (game) {
    super(game, "Mulldrifter", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = Mulldrifter;
