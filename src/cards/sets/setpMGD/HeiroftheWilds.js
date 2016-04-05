"use strict";
const Constants = require ("../../../Constants");
const HeiroftheWildsBase = require("../setKTK/HeiroftheWilds");

class HeiroftheWilds extends HeiroftheWildsBase {
  constructor(game) {
    super(game, "Heir of the Wilds", "Magic Game Day", "pMGD");
  }
}

module.exports = HeiroftheWilds;
