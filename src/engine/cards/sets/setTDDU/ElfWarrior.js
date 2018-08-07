"use strict";
const Constants = require ("../../../Constants");
const ElfWarriorBase = require("../setTM19/ElfWarrior");

class ElfWarrior extends ElfWarriorBase {
  constructor (game) {
    super(game, "Elf Warrior", "Duel Decks: Elves vs. Inventors Tokens", "TDDU");
  }
}

module.exports = ElfWarrior;
