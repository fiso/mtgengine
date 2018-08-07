"use strict";
const Constants = require ("../../../Constants");
const PhantomWarriorBase = require("../setBBD/PhantomWarrior");

class PhantomWarrior extends PhantomWarriorBase {
  constructor (game) {
    super(game, "Phantom Warrior", "Tenth Edition", "10E");
  }
}

module.exports = PhantomWarrior;
