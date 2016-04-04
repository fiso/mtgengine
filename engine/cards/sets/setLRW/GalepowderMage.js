"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GalepowderMageBase = require("../setDDI/GalepowderMage.js");

class GalepowderMage extends GalepowderMageBase {
  constructor(game) {
    super(game, "Galepowder Mage", "Lorwyn", "LRW");
  }
}

module.exports = GalepowderMage;
