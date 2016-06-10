"use strict";
const Constants = require ("../../../Constants");
const GorillaWarriorBase = require("../setBRB/GorillaWarrior");

class GorillaWarrior extends GorillaWarriorBase {
  constructor (game) {
    super(game, "Gorilla Warrior", "Urza's Saga", "USG");
  }
}

module.exports = GorillaWarrior;
