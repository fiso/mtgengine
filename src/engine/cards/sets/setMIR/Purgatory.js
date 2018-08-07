"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Purgatory extends UnimplementedCard {
  constructor (game) {
    super(game, "Purgatory", "Mirage", "MIR");
  }
}

module.exports = Purgatory;
