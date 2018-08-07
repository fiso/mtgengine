"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SelfAssembler extends UnimplementedCard {
  constructor (game) {
    super(game, "Self-Assembler", "Masters 25", "A25");
  }
}

module.exports = SelfAssembler;
