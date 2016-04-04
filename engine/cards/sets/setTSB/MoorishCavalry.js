"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoorishCavalryBase = require("../setARN/MoorishCavalry.js");

class MoorishCavalry extends MoorishCavalryBase {
  constructor(game) {
    super(game, "Moorish Cavalry", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = MoorishCavalry;
