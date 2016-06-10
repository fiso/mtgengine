"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShimianSpecter extends UnimplementedCard {
  constructor (game) {
    super(game, "Shimian Specter", "Future Sight", "FUT");
  }
}

module.exports = ShimianSpecter;
