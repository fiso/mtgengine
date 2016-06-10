"use strict";
const Constants = require ("../../../Constants");
const SerumTankBase = require("../setMRD/SerumTank");

class SerumTank extends SerumTankBase {
  constructor (game) {
    super(game, "Serum Tank", "Planechase", "HOP");
  }
}

module.exports = SerumTank;
