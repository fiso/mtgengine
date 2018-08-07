"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PiratesPrize extends UnimplementedCard {
  constructor (game) {
    super(game, "Pirate's Prize", "Ixalan", "XLN");
  }
}

module.exports = PiratesPrize;
