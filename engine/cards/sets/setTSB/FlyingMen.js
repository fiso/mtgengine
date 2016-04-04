"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlyingMenBase = require("../setARN/FlyingMen.js");

class FlyingMen extends FlyingMenBase {
  constructor(game) {
    super(game, "Flying Men", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = FlyingMen;
