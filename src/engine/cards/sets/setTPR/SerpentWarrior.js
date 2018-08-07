"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerpentWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Serpent Warrior", "Tempest Remastered", "TPR");
  }
}

module.exports = SerpentWarrior;
