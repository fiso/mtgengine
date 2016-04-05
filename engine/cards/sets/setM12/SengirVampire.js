"use strict";
const Constants = require ("../../../Constants");
const SengirVampireBase = require("../setBRB/SengirVampire");

class SengirVampire extends SengirVampireBase {
  constructor(game) {
    super(game, "Sengir Vampire", "Magic 2012", "M12");
  }
}

module.exports = SengirVampire;
