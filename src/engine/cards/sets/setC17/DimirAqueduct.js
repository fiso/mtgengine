"use strict";
const Constants = require ("../../../Constants");
const DimirAqueductBase = require("../setC18/DimirAqueduct");

class DimirAqueduct extends DimirAqueductBase {
  constructor (game) {
    super(game, "Dimir Aqueduct", "Commander 2017", "C17");
  }
}

module.exports = DimirAqueduct;
