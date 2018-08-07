"use strict";
const Constants = require ("../../../Constants");
const WolfbriarElementalBase = require("../setCMA/WolfbriarElemental");

class WolfbriarElemental extends WolfbriarElementalBase {
  constructor (game) {
    super(game, "Wolfbriar Elemental", "Conspiracy", "CNS");
  }
}

module.exports = WolfbriarElemental;
