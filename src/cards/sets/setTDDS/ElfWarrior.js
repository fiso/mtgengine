"use strict";
const Constants = require ("../../../Constants");
const ElfWarriorBase = require("../setTM19/ElfWarrior");

class ElfWarrior extends ElfWarriorBase {
  constructor (game) {
    super(game, "Elf Warrior", "Duel Decks: Mind vs. Might Tokens", "TDDS");
  }
}

module.exports = ElfWarrior;
