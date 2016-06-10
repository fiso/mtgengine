"use strict";
const Constants = require ("../../../Constants");
const ViashinoWarriorBase = require("../setBTD/ViashinoWarrior");

class ViashinoWarrior extends ViashinoWarriorBase {
  constructor (game) {
    super(game, "Viashino Warrior", "Mirage", "MIR");
  }
}

module.exports = ViashinoWarrior;
