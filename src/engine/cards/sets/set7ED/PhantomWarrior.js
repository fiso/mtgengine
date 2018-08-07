"use strict";
const Constants = require ("../../../Constants");
const PhantomWarriorBase = require("../setBBD/PhantomWarrior");

class PhantomWarrior extends PhantomWarriorBase {
  constructor (game) {
    super(game, "Phantom Warrior", "Seventh Edition", "7ED");
  }
}

module.exports = PhantomWarrior;
