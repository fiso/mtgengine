"use strict";
const Constants = require ("../../../Constants");
const EarthElementalBase = require("../setCED/EarthElemental");

class EarthElemental extends EarthElementalBase {
  constructor(game) {
    super(game, "Earth Elemental", "Limited Edition Alpha", "LEA");
  }
}

module.exports = EarthElemental;
