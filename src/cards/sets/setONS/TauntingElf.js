"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TauntingElf extends UnimplementedCard {
  constructor (game) {
    super(game, "Taunting Elf", "Onslaught", "ONS");
  }
}

module.exports = TauntingElf;
