"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArborElf extends UnimplementedCard {
  constructor (game) {
    super(game, "Arbor Elf", "Masters 25", "A25");
  }
}

module.exports = ArborElf;
