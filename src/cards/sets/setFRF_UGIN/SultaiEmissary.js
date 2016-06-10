"use strict";
const Constants = require ("../../../Constants");
const SultaiEmissaryBase = require("../setFRF/SultaiEmissary");

class SultaiEmissary extends SultaiEmissaryBase {
  constructor (game) {
    super(game, "Sultai Emissary", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = SultaiEmissary;
