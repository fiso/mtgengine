"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PantherWarriors extends UnimplementedCard {
  constructor(game) {
    super(game, "Panther Warriors", "Classic Sixth Edition", "6ED");
  }
}

module.exports = PantherWarriors;
