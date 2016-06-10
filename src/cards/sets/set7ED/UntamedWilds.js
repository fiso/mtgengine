"use strict";
const Constants = require ("../../../Constants");
const UntamedWildsBase = require("../set6ED/UntamedWilds");

class UntamedWilds extends UntamedWildsBase {
  constructor (game) {
    super(game, "Untamed Wilds", "Seventh Edition", "7ED");
  }
}

module.exports = UntamedWilds;
