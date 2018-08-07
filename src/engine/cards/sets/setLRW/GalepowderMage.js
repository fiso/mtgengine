"use strict";
const Constants = require ("../../../Constants");
const GalepowderMageBase = require("../setDDI/GalepowderMage");

class GalepowderMage extends GalepowderMageBase {
  constructor (game) {
    super(game, "Galepowder Mage", "Lorwyn", "LRW");
  }
}

module.exports = GalepowderMage;
