"use strict";
const Constants = require ("../../../Constants");
const DimirAqueductBase = require("../setCMD/DimirAqueduct");

class DimirAqueduct extends DimirAqueductBase {
  constructor(game) {
    super(game, "Dimir Aqueduct", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = DimirAqueduct;
