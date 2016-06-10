"use strict";
const Constants = require ("../../../Constants");
const CelestialPrismBase = require("../setCED/CelestialPrism");

class CelestialPrism extends CelestialPrismBase {
  constructor (game) {
    super(game, "Celestial Prism", "Revised Edition", "3ED");
  }
}

module.exports = CelestialPrism;
