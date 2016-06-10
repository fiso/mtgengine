"use strict";
const Constants = require ("../../../Constants");
const SengirVampireBase = require("../setBRB/SengirVampire");

class SengirVampire extends SengirVampireBase {
  constructor (game) {
    super(game, "Sengir Vampire", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = SengirVampire;
