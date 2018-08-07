"use strict";
const Constants = require ("../../../Constants");
const ElfWarriorBase = require("../setTM19/ElfWarrior");

class ElfWarrior extends ElfWarriorBase {
  constructor (game) {
    super(game, "Elf Warrior", "Duel Decks Anthology: Elves vs. Goblins Tokens", "TEVG");
  }
}

module.exports = ElfWarrior;
