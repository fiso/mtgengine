"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElfWarrior extends Card {
  constructor(game) {
    super(game, "Elf Warrior", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = ElfWarrior;
