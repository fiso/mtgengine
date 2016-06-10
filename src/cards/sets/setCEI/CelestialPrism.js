"use strict";
const Constants = require ("../../../Constants");
const CelestialPrismBase = require("../setCED/CelestialPrism");

class CelestialPrism extends CelestialPrismBase {
  constructor (game) {
    super(game, "Celestial Prism", "International Collector's Edition", "CEI");
  }
}

module.exports = CelestialPrism;
