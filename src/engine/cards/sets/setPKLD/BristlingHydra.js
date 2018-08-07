"use strict";
const Constants = require ("../../../Constants");
const BristlingHydraBase = require("../setKLD/BristlingHydra");

class BristlingHydra extends BristlingHydraBase {
  constructor (game) {
    super(game, "Bristling Hydra", "Kaladesh Promos", "PKLD");
  }
}

module.exports = BristlingHydra;
