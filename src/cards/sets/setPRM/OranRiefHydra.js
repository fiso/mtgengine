"use strict";
const Constants = require ("../../../Constants");
const OranRiefHydraBase = require("../setE01/OranRiefHydra");

class OranRiefHydra extends OranRiefHydraBase {
  constructor (game) {
    super(game, "Oran-Rief Hydra", "Magic Online Promos", "PRM");
  }
}

module.exports = OranRiefHydra;
