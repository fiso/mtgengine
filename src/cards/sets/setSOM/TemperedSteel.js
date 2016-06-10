"use strict";
const Constants = require ("../../../Constants");
const TemperedSteelBase = require("../setpMGD/TemperedSteel");

class TemperedSteel extends TemperedSteelBase {
  constructor (game) {
    super(game, "Tempered Steel", "Scars of Mirrodin", "SOM");
  }
}

module.exports = TemperedSteel;
