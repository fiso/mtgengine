"use strict";
const Constants = require ("../../../Constants");
const FogElementalBase = require("../set10E/FogElemental");

class FogElemental extends FogElementalBase {
  constructor (game) {
    super(game, "Fog Elemental", "Beatdown Box Set", "BTD");
  }
}

module.exports = FogElemental;
