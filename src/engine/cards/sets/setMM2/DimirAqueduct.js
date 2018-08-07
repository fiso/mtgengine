"use strict";
const Constants = require ("../../../Constants");
const DimirAqueductBase = require("../setC18/DimirAqueduct");

class DimirAqueduct extends DimirAqueductBase {
  constructor (game) {
    super(game, "Dimir Aqueduct", "Modern Masters 2015", "MM2");
  }
}

module.exports = DimirAqueduct;
