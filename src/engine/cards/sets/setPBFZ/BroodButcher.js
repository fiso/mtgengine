"use strict";
const Constants = require ("../../../Constants");
const BroodButcherBase = require("../setBFZ/BroodButcher");

class BroodButcher extends BroodButcherBase {
  constructor (game) {
    super(game, "Brood Butcher", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = BroodButcher;
