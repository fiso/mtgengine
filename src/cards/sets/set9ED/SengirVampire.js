"use strict";
const Constants = require ("../../../Constants");
const SengirVampireBase = require("../setBRB/SengirVampire");

class SengirVampire extends SengirVampireBase {
  constructor(game) {
    super(game, "Sengir Vampire", "Ninth Edition", "9ED");
  }
}

module.exports = SengirVampire;
