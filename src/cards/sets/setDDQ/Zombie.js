"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Zombie extends UnimplementedCard {
  constructor (game) {
    super(game, "Zombie", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = Zombie;
