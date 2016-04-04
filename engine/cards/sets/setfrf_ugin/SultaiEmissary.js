"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SultaiEmissaryBase = require("../setFRF/SultaiEmissary.js");

class SultaiEmissary extends SultaiEmissaryBase {
  constructor(game) {
    super(game, "Sultai Emissary", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = SultaiEmissary;
