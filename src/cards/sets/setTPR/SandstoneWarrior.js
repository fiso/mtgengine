"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SandstoneWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Sandstone Warrior", "Tempest Remastered", "TPR");
  }
}

module.exports = SandstoneWarrior;
