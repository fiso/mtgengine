"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoorFiend extends UnimplementedCard {
  constructor (game) {
    super(game, "Moor Fiend", "Ice Age", "ICE");
  }
}

module.exports = MoorFiend;
