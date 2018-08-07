"use strict";
const Constants = require ("../../../Constants");
const CatWarriorBase = require("../setTC18/CatWarrior");

class CatWarrior extends CatWarriorBase {
  constructor (game) {
    super(game, "Cat Warrior", "Commander 2017 Tokens", "TC17");
  }
}

module.exports = CatWarrior;
