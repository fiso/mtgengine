"use strict";
const Constants = require ("../../../Constants");
const MirarisWakeBase = require("../setC17/MirarisWake");

class MirarisWake extends MirarisWakeBase {
  constructor (game) {
    super(game, "Mirari's Wake", "Conspiracy", "CNS");
  }
}

module.exports = MirarisWake;
