"use strict";
const Constants = require ("../../../Constants");
const PhantomWarriorBase = require("../setBBD/PhantomWarrior");

class PhantomWarrior extends PhantomWarriorBase {
  constructor (game) {
    super(game, "Phantom Warrior", "Starter 1999", "S99");
  }
}

module.exports = PhantomWarrior;
