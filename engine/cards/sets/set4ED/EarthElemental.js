"use strict";
const Constants = require ("../../../Constants");
const EarthElementalBase = require("../setCED/EarthElemental");

class EarthElemental extends EarthElementalBase {
  constructor(game) {
    super(game, "Earth Elemental", "Fourth Edition", "4ED");
  }
}

module.exports = EarthElemental;
