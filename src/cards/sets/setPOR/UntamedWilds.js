"use strict";
const Constants = require ("../../../Constants");
const UntamedWildsBase = require("../set7ED/UntamedWilds");

class UntamedWilds extends UntamedWildsBase {
  constructor (game) {
    super(game, "Untamed Wilds", "Portal", "POR");
  }
}

module.exports = UntamedWilds;
