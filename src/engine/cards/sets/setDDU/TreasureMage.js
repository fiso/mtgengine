"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreasureMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Treasure Mage", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = TreasureMage;
