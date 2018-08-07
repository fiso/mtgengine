"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CatWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Cat Warrior", "Commander 2018 Tokens", "TC18");
  }
}

module.exports = CatWarrior;
