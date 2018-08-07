"use strict";
const Constants = require ("../../../Constants");
const SphereofResistanceBase = require("../setMPS/SphereofResistance");

class SphereofResistance extends SphereofResistanceBase {
  constructor (game) {
    super(game, "Sphere of Resistance", "Vintage Masters", "VMA");
  }
}

module.exports = SphereofResistance;
