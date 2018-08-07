"use strict";
const Constants = require ("../../../Constants");
const BloodTollHarpyBase = require("../setCN2/BloodTollHarpy");

class BloodTollHarpy extends BloodTollHarpyBase {
  constructor (game) {
    super(game, "Blood-Toll Harpy", "Theros", "THS");
  }
}

module.exports = BloodTollHarpy;
