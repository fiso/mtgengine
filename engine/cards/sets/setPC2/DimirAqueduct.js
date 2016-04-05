"use strict";
const Constants = require ("../../../Constants");
const DimirAqueductBase = require("../setCMD/DimirAqueduct");

class DimirAqueduct extends DimirAqueductBase {
  constructor(game) {
    super(game, "Dimir Aqueduct", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = DimirAqueduct;
