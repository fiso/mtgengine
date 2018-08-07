"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FoundryAssembler extends UnimplementedCard {
  constructor (game) {
    super(game, "Foundry Assembler", "Aether Revolt", "AER");
  }
}

module.exports = FoundryAssembler;
