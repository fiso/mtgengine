"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CatWarriors extends UnimplementedCard {
  constructor(game) {
    super(game, "Cat Warriors", "Chronicles", "CHR");
  }
}

module.exports = CatWarriors;
