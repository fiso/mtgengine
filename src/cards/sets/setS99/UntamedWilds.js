"use strict";
const Constants = require ("../../../Constants");
const UntamedWildsBase = require("../set6ED/UntamedWilds");

class UntamedWilds extends UntamedWildsBase {
  constructor (game) {
    super(game, "Untamed Wilds", "Starter 1999", "S99");
  }
}

module.exports = UntamedWilds;
