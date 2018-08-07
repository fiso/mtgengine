"use strict";
const Constants = require ("../../../Constants");
const FillwithFrightBase = require("../setBBD/FillwithFright");

class FillwithFright extends FillwithFrightBase {
  constructor (game) {
    super(game, "Fill with Fright", "Fifth Dawn", "5DN");
  }
}

module.exports = FillwithFright;
