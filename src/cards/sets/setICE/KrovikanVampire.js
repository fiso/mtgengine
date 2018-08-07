"use strict";
const Constants = require ("../../../Constants");
const KrovikanVampireBase = require("../setME2/KrovikanVampire");

class KrovikanVampire extends KrovikanVampireBase {
  constructor (game) {
    super(game, "Krovikan Vampire", "Ice Age", "ICE");
  }
}

module.exports = KrovikanVampire;
