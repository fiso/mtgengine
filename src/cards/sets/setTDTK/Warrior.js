"use strict";
const Constants = require ("../../../Constants");
const WarriorBase = require("../setTBBD/Warrior");

class Warrior extends WarriorBase {
  constructor (game) {
    super(game, "Warrior", "Dragons of Tarkir Tokens", "TDTK");
  }
}

module.exports = Warrior;
