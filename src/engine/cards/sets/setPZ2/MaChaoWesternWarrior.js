"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaChaoWesternWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Ma Chao, Western Warrior", "You Make the Cube", "PZ2");
  }
}

module.exports = MaChaoWesternWarrior;
