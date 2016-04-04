"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CelestialFlareBase = require("../setDDO/CelestialFlare.js");

class CelestialFlare extends CelestialFlareBase {
  constructor(game) {
    super(game, "Celestial Flare", "Magic 2014 Core Set", "M14");
  }
}

module.exports = CelestialFlare;
