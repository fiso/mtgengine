"use strict";
const Constants = require ("../../../Constants");
const CelestialSwordBase = require("../setME4/CelestialSword");

class CelestialSword extends CelestialSwordBase {
  constructor (game) {
    super(game, "Celestial Sword", "Ice Age", "ICE");
  }
}

module.exports = CelestialSword;
