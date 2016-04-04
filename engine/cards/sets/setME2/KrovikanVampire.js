"use strict";
const Constants = require ("../../../Constants");
const KrovikanVampireBase = require("../setICE/KrovikanVampire");

class KrovikanVampire extends KrovikanVampireBase {
  constructor(game) {
    super(game, "Krovikan Vampire", "Masters Edition II", "ME2");
  }
}

module.exports = KrovikanVampire;
