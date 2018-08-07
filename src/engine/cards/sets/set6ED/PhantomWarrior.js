"use strict";
const Constants = require ("../../../Constants");
const PhantomWarriorBase = require("../setBBD/PhantomWarrior");

class PhantomWarrior extends PhantomWarriorBase {
  constructor (game) {
    super(game, "Phantom Warrior", "Classic Sixth Edition", "6ED");
  }
}

module.exports = PhantomWarrior;
