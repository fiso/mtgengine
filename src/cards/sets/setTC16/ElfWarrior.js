"use strict";
const Constants = require ("../../../Constants");
const ElfWarriorBase = require("../setTM19/ElfWarrior");

class ElfWarrior extends ElfWarriorBase {
  constructor (game) {
    super(game, "Elf Warrior", "Commander 2016 Tokens", "TC16");
  }
}

module.exports = ElfWarrior;
