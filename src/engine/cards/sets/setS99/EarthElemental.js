"use strict";
const Constants = require ("../../../Constants");
const EarthElementalBase = require("../setBBD/EarthElemental");

class EarthElemental extends EarthElementalBase {
  constructor (game) {
    super(game, "Earth Elemental", "Starter 1999", "S99");
  }
}

module.exports = EarthElemental;
