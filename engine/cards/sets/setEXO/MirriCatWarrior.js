"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MirriCatWarriorBase = require("../setATH/MirriCatWarrior.js");

class MirriCatWarrior extends MirriCatWarriorBase {
  constructor(game) {
    super(game, "Mirri, Cat Warrior", "Exodus", "EXO");
  }
}

module.exports = MirriCatWarrior;
