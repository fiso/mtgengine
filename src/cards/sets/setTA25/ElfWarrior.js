"use strict";
const Constants = require ("../../../Constants");
const ElfWarriorBase = require("../setTM19/ElfWarrior");

class ElfWarrior extends ElfWarriorBase {
  constructor (game) {
    super(game, "Elf Warrior", "Masters 25 Tokens", "TA25");
  }
}

module.exports = ElfWarrior;
