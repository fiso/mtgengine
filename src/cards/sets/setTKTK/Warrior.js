"use strict";
const Constants = require ("../../../Constants");
const WarriorBase = require("../setTBBD/Warrior");

class Warrior extends WarriorBase {
  constructor (game) {
    super(game, "Warrior", "Khans of Tarkir Tokens", "TKTK");
  }
}

module.exports = Warrior;
