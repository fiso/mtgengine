"use strict";
const Constants = require ("../../../Constants");
const SengirVampireBase = require("../setBRB/SengirVampire");

class SengirVampire extends SengirVampireBase {
  constructor (game) {
    super(game, "Sengir Vampire", "Masters Edition IV", "ME4");
  }
}

module.exports = SengirVampire;
