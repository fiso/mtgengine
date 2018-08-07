"use strict";
const Constants = require ("../../../Constants");
const MoorishCavalryBase = require("../setTSB/MoorishCavalry");

class MoorishCavalry extends MoorishCavalryBase {
  constructor (game) {
    super(game, "Moorish Cavalry", "Arabian Nights", "ARN");
  }
}

module.exports = MoorishCavalry;
