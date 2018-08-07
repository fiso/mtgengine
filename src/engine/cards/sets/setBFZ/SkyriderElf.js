"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkyriderElf extends UnimplementedCard {
  constructor (game) {
    super(game, "Skyrider Elf", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SkyriderElf;
