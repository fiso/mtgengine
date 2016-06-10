"use strict";
const Constants = require ("../../../Constants");
const FogElementalBase = require("../setBTD/FogElemental");

class FogElemental extends FogElementalBase {
  constructor (game) {
    super(game, "Fog Elemental", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FogElemental;
