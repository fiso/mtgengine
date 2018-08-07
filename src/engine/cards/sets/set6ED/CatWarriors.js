"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CatWarriors extends UnimplementedCard {
  constructor (game) {
    super(game, "Cat Warriors", "Classic Sixth Edition", "6ED");
  }
}

module.exports = CatWarriors;
