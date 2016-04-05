"use strict";
const Constants = require ("../../../Constants");
const MirarisWakeBase = require("../setCM1/MirarisWake");

class MirarisWake extends MirarisWakeBase {
  constructor(game) {
    super(game, "Mirari's Wake", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = MirarisWake;
