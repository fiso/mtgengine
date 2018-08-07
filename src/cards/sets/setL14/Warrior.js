"use strict";
const Constants = require ("../../../Constants");
const WarriorBase = require("../setTBBD/Warrior");

class Warrior extends WarriorBase {
  constructor (game) {
    super(game, "Warrior", "League Tokens 2014", "L14");
  }
}

module.exports = Warrior;
