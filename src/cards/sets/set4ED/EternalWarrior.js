"use strict";
const Constants = require ("../../../Constants");
const EternalWarriorBase = require("../set5ED/EternalWarrior");

class EternalWarrior extends EternalWarriorBase {
  constructor (game) {
    super(game, "Eternal Warrior", "Fourth Edition", "4ED");
  }
}

module.exports = EternalWarrior;
