"use strict";
const Constants = require ("../../../Constants");
const BloodSunBase = require("../setPRIX/BloodSun");

class BloodSun extends BloodSunBase {
  constructor (game) {
    super(game, "Blood Sun", "Rivals of Ixalan", "RIX");
  }
}

module.exports = BloodSun;
