"use strict";
const Constants = require ("../../../Constants");
const CelestialFlareBase = require("../setORI/CelestialFlare");

class CelestialFlare extends CelestialFlareBase {
  constructor (game) {
    super(game, "Celestial Flare", "Magic 2014", "M14");
  }
}

module.exports = CelestialFlare;
