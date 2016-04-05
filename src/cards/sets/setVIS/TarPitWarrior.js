"use strict";
const Constants = require ("../../../Constants");
const TarPitWarriorBase = require("../setBTD/TarPitWarrior");

class TarPitWarrior extends TarPitWarriorBase {
  constructor(game) {
    super(game, "Tar Pit Warrior", "Visions", "VIS");
  }
}

module.exports = TarPitWarrior;
