"use strict";
const Constants = require ("../../../Constants");
const SultaiEmissaryBase = require("../setFRF/SultaiEmissary");

class SultaiEmissary extends SultaiEmissaryBase {
  constructor (game) {
    super(game, "Sultai Emissary", "Magic Online Promos", "PRM");
  }
}

module.exports = SultaiEmissary;
