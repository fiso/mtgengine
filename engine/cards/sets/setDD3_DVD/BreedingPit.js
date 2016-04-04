"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BreedingPit extends Card {
  constructor(game) {
    super(game, "Breeding Pit", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = BreedingPit;
