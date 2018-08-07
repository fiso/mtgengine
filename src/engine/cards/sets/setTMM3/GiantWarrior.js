"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Giant Warrior", "Modern Masters 2017 Tokens", "TMM3");
  }
}

module.exports = GiantWarrior;
