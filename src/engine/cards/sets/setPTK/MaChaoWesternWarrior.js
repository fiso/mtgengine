"use strict";
const Constants = require ("../../../Constants");
const MaChaoWesternWarriorBase = require("../setPZ2/MaChaoWesternWarrior");

class MaChaoWesternWarrior extends MaChaoWesternWarriorBase {
  constructor (game) {
    super(game, "Ma Chao, Western Warrior", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = MaChaoWesternWarrior;
