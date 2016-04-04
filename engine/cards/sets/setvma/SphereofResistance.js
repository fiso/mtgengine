"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SphereofResistanceBase = require("../setEXO/SphereofResistance.js");

class SphereofResistance extends SphereofResistanceBase {
  constructor(game) {
    super(game, "Sphere of Resistance", "Vintage Masters", "VMA");
  }
}

module.exports = SphereofResistance;
