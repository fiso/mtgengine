"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DinosaurTreasure extends UnimplementedCard {
  constructor (game) {
    super(game, "Dinosaur // Treasure", "Friday Night Magic 2017", "F17");
  }
}

module.exports = DinosaurTreasure;
