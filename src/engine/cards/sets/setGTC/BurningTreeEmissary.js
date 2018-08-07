"use strict";
const Constants = require ("../../../Constants");
const BurningTreeEmissaryBase = require("../setDDS/BurningTreeEmissary");

class BurningTreeEmissary extends BurningTreeEmissaryBase {
  constructor (game) {
    super(game, "Burning-Tree Emissary", "Gatecrash", "GTC");
  }
}

module.exports = BurningTreeEmissary;
