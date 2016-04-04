"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DimirAqueductBase = require("../setCMD/DimirAqueduct.js");

class DimirAqueduct extends DimirAqueductBase {
  constructor(game) {
    super(game, "Dimir Aqueduct", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = DimirAqueduct;
