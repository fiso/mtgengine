"use strict";
const Constants = require ("../../../Constants");
const WakedancerBase = require("../setEMA/Wakedancer");

class Wakedancer extends WakedancerBase {
  constructor (game) {
    super(game, "Wakedancer", "Dark Ascension", "DKA");
  }
}

module.exports = Wakedancer;
