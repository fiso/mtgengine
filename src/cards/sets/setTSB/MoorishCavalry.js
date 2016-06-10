"use strict";
const Constants = require ("../../../Constants");
const MoorishCavalryBase = require("../setARN/MoorishCavalry");

class MoorishCavalry extends MoorishCavalryBase {
  constructor (game) {
    super(game, "Moorish Cavalry", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = MoorishCavalry;
