"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlizzardElementalBase = require("../setBTD/BlizzardElemental.js");

class BlizzardElemental extends BlizzardElementalBase {
  constructor(game) {
    super(game, "Blizzard Elemental", "Urza's Destiny", "UDS");
  }
}

module.exports = BlizzardElemental;
