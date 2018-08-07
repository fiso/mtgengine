"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CogworkAssembler extends UnimplementedCard {
  constructor (game) {
    super(game, "Cogwork Assembler", "Aether Revolt", "AER");
  }
}

module.exports = CogworkAssembler;
