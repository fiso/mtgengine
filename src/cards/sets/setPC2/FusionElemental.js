"use strict";
const Constants = require ("../../../Constants");
const FusionElementalBase = require("../setCON/FusionElemental");

class FusionElemental extends FusionElementalBase {
  constructor (game) {
    super(game, "Fusion Elemental", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = FusionElemental;
