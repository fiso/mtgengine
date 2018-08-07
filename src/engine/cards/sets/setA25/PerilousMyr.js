"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PerilousMyr extends UnimplementedCard {
  constructor (game) {
    super(game, "Perilous Myr", "Masters 25", "A25");
  }
}

module.exports = PerilousMyr;
