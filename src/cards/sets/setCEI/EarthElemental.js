"use strict";
const Constants = require ("../../../Constants");
const EarthElementalBase = require("../setCED/EarthElemental");

class EarthElemental extends EarthElementalBase {
  constructor (game) {
    super(game, "Earth Elemental", "International Collector's Edition", "CEI");
  }
}

module.exports = EarthElemental;
