"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CelestialCrusaderBase = require("../setC14/CelestialCrusader.js");

class CelestialCrusader extends CelestialCrusaderBase {
  constructor(game) {
    super(game, "Celestial Crusader", "Time Spiral", "TSP");
  }
}

module.exports = CelestialCrusader;
