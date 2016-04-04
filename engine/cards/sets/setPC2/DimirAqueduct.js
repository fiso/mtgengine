"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DimirAqueductBase = require("../setCMD/DimirAqueduct.js");

class DimirAqueduct extends DimirAqueductBase {
  constructor(game) {
    super(game, "Dimir Aqueduct", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = DimirAqueduct;
