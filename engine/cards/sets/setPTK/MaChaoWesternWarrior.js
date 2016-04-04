"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MaChaoWesternWarrior extends Card {
  constructor(game) {
    super(game, "Ma Chao, Western Warrior", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = MaChaoWesternWarrior;
