"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DimirAqueductBase = require("../setCMD/DimirAqueduct.js");

class DimirAqueduct extends DimirAqueductBase {
  constructor(game) {
    super(game, "Dimir Aqueduct", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DimirAqueduct;
