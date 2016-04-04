"use strict";
const Constants = require ("../../../Constants");
const CelestialArchonBase = require("../setC15/CelestialArchon");

class CelestialArchon extends CelestialArchonBase {
  constructor(game) {
    super(game, "Celestial Archon", "Theros", "THS");
  }
}

module.exports = CelestialArchon;
