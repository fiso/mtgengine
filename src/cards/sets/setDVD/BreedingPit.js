"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BreedingPit extends UnimplementedCard {
  constructor (game) {
    super(game, "Breeding Pit", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = BreedingPit;
