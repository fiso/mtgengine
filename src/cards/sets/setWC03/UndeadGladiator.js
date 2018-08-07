"use strict";
const Constants = require ("../../../Constants");
const UndeadGladiatorBase = require("../setA25/UndeadGladiator");

class UndeadGladiator extends UndeadGladiatorBase {
  constructor (game) {
    super(game, "Undead Gladiator", "World Championship Decks 2003", "WC03");
  }
}

module.exports = UndeadGladiator;
