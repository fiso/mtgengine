"use strict";
const Constants = require ("../../../Constants");
const CelestialArchonBase = require("../setC18/CelestialArchon");

class CelestialArchon extends CelestialArchonBase {
  constructor (game) {
    super(game, "Celestial Archon", "Magic Online Promos", "PRM");
  }
}

module.exports = CelestialArchon;
