"use strict";
const Constants = require ("../../../Constants");
const ShiftingSkyBase = require("../set8ED/ShiftingSky");

class ShiftingSky extends ShiftingSkyBase {
  constructor(game) {
    super(game, "Shifting Sky", "Planeshift", "PLS");
  }
}

module.exports = ShiftingSky;
