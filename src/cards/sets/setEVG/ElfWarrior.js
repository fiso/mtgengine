"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElfWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Elf Warrior", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = ElfWarrior;
