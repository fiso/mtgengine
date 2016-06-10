"use strict";
const Constants = require ("../../../Constants");
const SealofFireBase = require("../setDIS/SealofFire");

class SealofFire extends SealofFireBase {
  constructor (game) {
    super(game, "Seal of Fire", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = SealofFire;
