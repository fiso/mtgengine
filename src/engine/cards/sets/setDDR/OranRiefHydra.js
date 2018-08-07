"use strict";
const Constants = require ("../../../Constants");
const OranRiefHydraBase = require("../setE01/OranRiefHydra");

class OranRiefHydra extends OranRiefHydraBase {
  constructor (game) {
    super(game, "Oran-Rief Hydra", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = OranRiefHydra;
