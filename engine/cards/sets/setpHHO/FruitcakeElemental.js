"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FruitcakeElemental extends Card {
  constructor(game) {
    super(game, "Fruitcake Elemental", "Happy Holidays", "pHHO");
  }
}

module.exports = FruitcakeElemental;
