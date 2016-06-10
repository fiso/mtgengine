"use strict";
const Constants = require ("../../../Constants");
const CelestialSwordBase = require("../setICE/CelestialSword");

class CelestialSword extends CelestialSwordBase {
  constructor (game) {
    super(game, "Celestial Sword", "Masters Edition IV", "ME4");
  }
}

module.exports = CelestialSword;
