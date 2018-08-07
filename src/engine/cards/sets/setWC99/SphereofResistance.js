"use strict";
const Constants = require ("../../../Constants");
const SphereofResistanceBase = require("../setMPS/SphereofResistance");

class SphereofResistance extends SphereofResistanceBase {
  constructor (game) {
    super(game, "Sphere of Resistance", "World Championship Decks 1999", "WC99");
  }
}

module.exports = SphereofResistance;
