"use strict";
const Constants = require ("../../../Constants");
const DimirAqueductBase = require("../setC18/DimirAqueduct");

class DimirAqueduct extends DimirAqueductBase {
  constructor (game) {
    super(game, "Dimir Aqueduct", "Planechase Anthology", "PCA");
  }
}

module.exports = DimirAqueduct;
