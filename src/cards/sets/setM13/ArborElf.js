"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArborElf extends UnimplementedCard {
  constructor (game) {
    super(game, "Arbor Elf", "Magic 2013", "M13");
  }
}

module.exports = ArborElf;
