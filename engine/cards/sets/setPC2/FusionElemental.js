"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FusionElementalBase = require("../setCON/FusionElemental.js");

class FusionElemental extends FusionElementalBase {
  constructor(game) {
    super(game, "Fusion Elemental", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = FusionElemental;
