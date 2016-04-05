"use strict";
const Constants = require ("../../../Constants");
const CelestialCrusaderBase = require("../setC14/CelestialCrusader");

class CelestialCrusader extends CelestialCrusaderBase {
  constructor(game) {
    super(game, "Celestial Crusader", "Time Spiral", "TSP");
  }
}

module.exports = CelestialCrusader;
