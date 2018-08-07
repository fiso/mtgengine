"use strict";
const Constants = require ("../../../Constants");
const SerumTankBase = require("../setHOP/SerumTank");

class SerumTank extends SerumTankBase {
  constructor (game) {
    super(game, "Serum Tank", "Mirrodin", "MRD");
  }
}

module.exports = SerumTank;
