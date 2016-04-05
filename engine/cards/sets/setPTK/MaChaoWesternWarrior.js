"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaChaoWesternWarrior extends UnimplementedCard {
  constructor(game) {
    super(game, "Ma Chao, Western Warrior", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = MaChaoWesternWarrior;
