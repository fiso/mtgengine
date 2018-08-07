"use strict";
const Constants = require ("../../../Constants");
const KraulWarriorBase = require("../setBBD/KraulWarrior");

class KraulWarrior extends KraulWarriorBase {
  constructor (game) {
    super(game, "Kraul Warrior", "Dragon's Maze", "DGM");
  }
}

module.exports = KraulWarrior;
