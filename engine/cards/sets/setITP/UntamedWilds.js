"use strict";
const Constants = require ("../../../Constants");
const UntamedWildsBase = require("../set6ED/UntamedWilds");

class UntamedWilds extends UntamedWildsBase {
  constructor(game) {
    super(game, "Untamed Wilds", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = UntamedWilds;
