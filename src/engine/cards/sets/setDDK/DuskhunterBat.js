"use strict";
const Constants = require ("../../../Constants");
const DuskhunterBatBase = require("../setMM2/DuskhunterBat");

class DuskhunterBat extends DuskhunterBatBase {
  constructor (game) {
    super(game, "Duskhunter Bat", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = DuskhunterBat;
