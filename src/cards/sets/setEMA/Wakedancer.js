"use strict";
const Constants = require ("../../../Constants");
const WakedancerBase = require("../setDKA/Wakedancer");

class Wakedancer extends WakedancerBase {
  constructor (game) {
    super(game, "Wakedancer", "Eternal Masters", "EMA");
  }
}

module.exports = Wakedancer;
