"use strict";
const Constants = require ("../../../Constants");
const EarthElementalBase = require("../setBBD/EarthElemental");

class EarthElemental extends EarthElementalBase {
  constructor (game) {
    super(game, "Earth Elemental", "Collectors’ Edition", "CED");
  }
}

module.exports = EarthElemental;
