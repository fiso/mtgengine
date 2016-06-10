"use strict";
const Constants = require ("../../../Constants");
const FlyingMenBase = require("../setARN/FlyingMen");

class FlyingMen extends FlyingMenBase {
  constructor (game) {
    super(game, "Flying Men", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = FlyingMen;
