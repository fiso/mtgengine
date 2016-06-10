"use strict";
const Constants = require ("../../../Constants");
const MirriCatWarriorBase = require("../setATH/MirriCatWarrior");

class MirriCatWarrior extends MirriCatWarriorBase {
  constructor (game) {
    super(game, "Mirri, Cat Warrior", "Tempest Remastered", "TPR");
  }
}

module.exports = MirriCatWarrior;
