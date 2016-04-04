"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CelestialDawnBase = require("../set6ED/CelestialDawn.js");

class CelestialDawn extends CelestialDawnBase {
  constructor(game) {
    super(game, "Celestial Dawn", "Mirage", "MIR");
  }
}

module.exports = CelestialDawn;
