"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Warrior", "Modern Masters 2017 Tokens", "TMM3");
  }
}

module.exports = GoblinWarrior;
