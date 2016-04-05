"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FruitcakeElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Fruitcake Elemental", "Happy Holidays", "pHHO");
  }
}

module.exports = FruitcakeElemental;
