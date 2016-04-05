"use strict";
const Constants = require ("../../../Constants");
const SengirVampireBase = require("../setBRB/SengirVampire");

class SengirVampire extends SengirVampireBase {
  constructor(game) {
    super(game, "Sengir Vampire", "International Collector's Edition", "CEI");
  }
}

module.exports = SengirVampire;
