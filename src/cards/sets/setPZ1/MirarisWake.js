"use strict";
const Constants = require ("../../../Constants");
const MirarisWakeBase = require("../setC17/MirarisWake");

class MirarisWake extends MirarisWakeBase {
  constructor (game) {
    super(game, "Mirari's Wake", "Legendary Cube", "PZ1");
  }
}

module.exports = MirarisWake;
