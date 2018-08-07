"use strict";
const Constants = require ("../../../Constants");
const SmugglersCopterBase = require("../setKLD/SmugglersCopter");

class SmugglersCopter extends SmugglersCopterBase {
  constructor (game) {
    super(game, "Smuggler's Copter", "Kaladesh Promos", "PKLD");
  }
}

module.exports = SmugglersCopter;
