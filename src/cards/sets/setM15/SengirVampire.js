"use strict";
const Constants = require ("../../../Constants");
const SengirVampireBase = require("../setBRB/SengirVampire");

class SengirVampire extends SengirVampireBase {
  constructor (game) {
    super(game, "Sengir Vampire", "Magic 2015 Core Set", "M15");
  }
}

module.exports = SengirVampire;
