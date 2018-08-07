"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElfWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Elf Warrior", "Core Set 2019 Tokens", "TM19");
  }
}

module.exports = ElfWarrior;
