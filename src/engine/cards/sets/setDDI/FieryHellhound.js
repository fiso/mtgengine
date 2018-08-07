"use strict";
const Constants = require ("../../../Constants");
const FieryHellhoundBase = require("../setORI/FieryHellhound");

class FieryHellhound extends FieryHellhoundBase {
  constructor (game) {
    super(game, "Fiery Hellhound", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = FieryHellhound;
