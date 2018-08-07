"use strict";
const Constants = require ("../../../Constants");
const BreedingPitBase = require("../setDVD/BreedingPit");

class BreedingPit extends BreedingPitBase {
  constructor (game) {
    super(game, "Breeding Pit", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = BreedingPit;
