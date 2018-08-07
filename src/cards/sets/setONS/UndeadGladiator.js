"use strict";
const Constants = require ("../../../Constants");
const UndeadGladiatorBase = require("../setA25/UndeadGladiator");

class UndeadGladiator extends UndeadGladiatorBase {
  constructor (game) {
    super(game, "Undead Gladiator", "Onslaught", "ONS");
  }
}

module.exports = UndeadGladiator;
