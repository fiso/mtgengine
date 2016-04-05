"use strict";
const Constants = require ("../../../Constants");
const CelestialFlareBase = require("../setDDO/CelestialFlare");

class CelestialFlare extends CelestialFlareBase {
  constructor(game) {
    super(game, "Celestial Flare", "Magic Origins", "ORI");
  }
}

module.exports = CelestialFlare;
