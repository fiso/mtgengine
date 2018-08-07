"use strict";
const Constants = require ("../../../Constants");
const MirriCatWarriorBase = require("../setTPR/MirriCatWarrior");

class MirriCatWarrior extends MirriCatWarriorBase {
  constructor (game) {
    super(game, "Mirri, Cat Warrior", "Tenth Edition", "10E");
  }
}

module.exports = MirriCatWarrior;
