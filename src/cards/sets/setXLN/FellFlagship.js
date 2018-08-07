"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FellFlagship extends UnimplementedCard {
  constructor (game) {
    super(game, "Fell Flagship", "Ixalan", "XLN");
  }
}

module.exports = FellFlagship;
