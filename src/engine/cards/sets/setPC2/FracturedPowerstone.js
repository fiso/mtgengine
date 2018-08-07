"use strict";
const Constants = require ("../../../Constants");
const FracturedPowerstoneBase = require("../setPCA/FracturedPowerstone");

class FracturedPowerstone extends FracturedPowerstoneBase {
  constructor (game) {
    super(game, "Fractured Powerstone", "Planechase 2012", "PC2");
  }
}

module.exports = FracturedPowerstone;
