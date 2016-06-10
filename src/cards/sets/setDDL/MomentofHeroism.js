"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MomentofHeroism extends UnimplementedCard {
  constructor (game) {
    super(game, "Moment of Heroism", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = MomentofHeroism;
