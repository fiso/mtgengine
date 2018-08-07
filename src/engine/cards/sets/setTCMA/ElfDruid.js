"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElfDruid extends UnimplementedCard {
  constructor (game) {
    super(game, "Elf Druid", "Commander Anthology Tokens", "TCMA");
  }
}

module.exports = ElfDruid;
