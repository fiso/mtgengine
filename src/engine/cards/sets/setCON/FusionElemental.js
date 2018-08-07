"use strict";
const Constants = require ("../../../Constants");
const FusionElementalBase = require("../setPCA/FusionElemental");

class FusionElemental extends FusionElementalBase {
  constructor (game) {
    super(game, "Fusion Elemental", "Conflux", "CON");
  }
}

module.exports = FusionElemental;
