"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WarBargeBase = require("../setDRK/WarBarge.js");

class WarBarge extends WarBargeBase {
  constructor(game) {
    super(game, "War Barge", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = WarBarge;
