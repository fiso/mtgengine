"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhantomWarriorBase = require("../set6ED/PhantomWarrior.js");

class PhantomWarrior extends PhantomWarriorBase {
  constructor(game) {
    super(game, "Phantom Warrior", "Starter 1999", "S99");
  }
}

module.exports = PhantomWarrior;
