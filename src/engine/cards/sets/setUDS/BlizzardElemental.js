"use strict";
const Constants = require ("../../../Constants");
const BlizzardElementalBase = require("../setBTD/BlizzardElemental");

class BlizzardElemental extends BlizzardElementalBase {
  constructor (game) {
    super(game, "Blizzard Elemental", "Urza's Destiny", "UDS");
  }
}

module.exports = BlizzardElemental;
