"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShowerofSparks extends UnimplementedCard {
  constructor (game) {
    super(game, "Shower of Sparks", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = ShowerofSparks;
