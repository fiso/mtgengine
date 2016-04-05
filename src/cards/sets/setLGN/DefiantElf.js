"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DefiantElf extends UnimplementedCard {
  constructor(game) {
    super(game, "Defiant Elf", "Legions", "LGN");
  }
}

module.exports = DefiantElf;
