"use strict";
const Constants = require ("../../../Constants");
const UntamedWildsBase = require("../set7ED/UntamedWilds");

class UntamedWilds extends UntamedWildsBase {
  constructor (game) {
    super(game, "Untamed Wilds", "Classic Sixth Edition", "6ED");
  }
}

module.exports = UntamedWilds;
