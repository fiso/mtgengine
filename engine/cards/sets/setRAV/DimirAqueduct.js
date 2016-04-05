"use strict";
const Constants = require ("../../../Constants");
const DimirAqueductBase = require("../setCMD/DimirAqueduct");

class DimirAqueduct extends DimirAqueductBase {
  constructor(game) {
    super(game, "Dimir Aqueduct", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DimirAqueduct;
