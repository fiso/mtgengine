"use strict";
const Constants = require ("../../../Constants");
const SireofStagnationBase = require("../setBFZ/SireofStagnation");

class SireofStagnation extends SireofStagnationBase {
  constructor (game) {
    super(game, "Sire of Stagnation", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = SireofStagnation;
