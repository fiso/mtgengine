"use strict";
const Constants = require ("../../../Constants");
const SailorofMeansBase = require("../setRIX/SailorofMeans");

class SailorofMeans extends SailorofMeansBase {
  constructor (game) {
    super(game, "Sailor of Means", "Ixalan", "XLN");
  }
}

module.exports = SailorofMeans;
