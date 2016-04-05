"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlistenerElf extends UnimplementedCard {
  constructor(game) {
    super(game, "Glistener Elf", "Friday Night Magic", "pFNM");
  }
}

module.exports = GlistenerElf;
