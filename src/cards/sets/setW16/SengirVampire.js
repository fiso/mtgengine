"use strict";
const Constants = require ("../../../Constants");
const SengirVampireBase = require("../setBRB/SengirVampire");

class SengirVampire extends SengirVampireBase {
  constructor (game) {
    super(game, "Sengir Vampire", "Welcome Deck 2016", "W16");
  }
}

module.exports = SengirVampire;
