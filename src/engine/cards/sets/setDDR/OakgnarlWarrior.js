"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OakgnarlWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Oakgnarl Warrior", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = OakgnarlWarrior;
