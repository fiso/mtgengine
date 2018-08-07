"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Torchling extends UnimplementedCard {
  constructor (game) {
    super(game, "Torchling", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = Torchling;
