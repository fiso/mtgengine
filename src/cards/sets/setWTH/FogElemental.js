"use strict";
const Constants = require ("../../../Constants");
const FogElementalBase = require("../setBTD/FogElemental");

class FogElemental extends FogElementalBase {
  constructor (game) {
    super(game, "Fog Elemental", "Weatherlight", "WTH");
  }
}

module.exports = FogElemental;
