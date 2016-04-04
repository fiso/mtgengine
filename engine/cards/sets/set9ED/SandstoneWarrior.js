"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SandstoneWarrior extends UnimplementedCard {
  constructor(game) {
    super(game, "Sandstone Warrior", "Ninth Edition", "9ED");
  }
}

module.exports = SandstoneWarrior;
