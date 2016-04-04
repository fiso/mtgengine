"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TemperedSteelBase = require("../setpMGD/TemperedSteel.js");

class TemperedSteel extends TemperedSteelBase {
  constructor(game) {
    super(game, "Tempered Steel", "Scars of Mirrodin", "SOM");
  }
}

module.exports = TemperedSteel;
