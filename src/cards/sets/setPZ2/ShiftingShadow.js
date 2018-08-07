"use strict";
const Constants = require ("../../../Constants");
const ShiftingShadowBase = require("../setC17/ShiftingShadow");

class ShiftingShadow extends ShiftingShadowBase {
  constructor (game) {
    super(game, "Shifting Shadow", "You Make the Cube", "PZ2");
  }
}

module.exports = ShiftingShadow;
