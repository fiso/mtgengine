"use strict";
const Constants = require ("../../../Constants");
const RagsRichesBase = require("../setAKH/RagsRiches");

class RagsRiches extends RagsRichesBase {
  constructor (game) {
    super(game, "Rags // Riches", "Amonkhet Promos", "PAKH");
  }
}

module.exports = RagsRiches;
