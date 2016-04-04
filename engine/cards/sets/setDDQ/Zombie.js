"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Zombie extends Card {
  constructor(game) {
    super(game, "Zombie", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = Zombie;
