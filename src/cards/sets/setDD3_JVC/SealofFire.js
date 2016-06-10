"use strict";
const Constants = require ("../../../Constants");
const SealofFireBase = require("../setDIS/SealofFire");

class SealofFire extends SealofFireBase {
  constructor (game) {
    super(game, "Seal of Fire", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = SealofFire;
