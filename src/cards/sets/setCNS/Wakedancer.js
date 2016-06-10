"use strict";
const Constants = require ("../../../Constants");
const WakedancerBase = require("../setDKA/Wakedancer");

class Wakedancer extends WakedancerBase {
  constructor (game) {
    super(game, "Wakedancer", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Wakedancer;
