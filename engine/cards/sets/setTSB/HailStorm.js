"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HailStormBase = require("../setALL/HailStorm.js");

class HailStorm extends HailStormBase {
  constructor(game) {
    super(game, "Hail Storm", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = HailStorm;
