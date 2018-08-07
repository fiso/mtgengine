"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FuriousReprisal extends UnimplementedCard {
  constructor (game) {
    super(game, "Furious Reprisal", "Kaladesh", "KLD");
  }
}

module.exports = FuriousReprisal;
