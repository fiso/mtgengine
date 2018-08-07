"use strict";
const Constants = require ("../../../Constants");
const DimirAqueductBase = require("../setC18/DimirAqueduct");

class DimirAqueduct extends DimirAqueductBase {
  constructor (game) {
    super(game, "Dimir Aqueduct", "Planechase 2012", "PC2");
  }
}

module.exports = DimirAqueduct;
