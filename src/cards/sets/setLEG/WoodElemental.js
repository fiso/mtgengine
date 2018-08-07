"use strict";
const Constants = require ("../../../Constants");
const WoodElementalBase = require("../setME4/WoodElemental");

class WoodElemental extends WoodElementalBase {
  constructor (game) {
    super(game, "Wood Elemental", "Legends", "LEG");
  }
}

module.exports = WoodElemental;
