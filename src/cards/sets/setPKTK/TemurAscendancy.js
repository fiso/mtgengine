"use strict";
const Constants = require ("../../../Constants");
const TemurAscendancyBase = require("../setKTK/TemurAscendancy");

class TemurAscendancy extends TemurAscendancyBase {
  constructor (game) {
    super(game, "Temur Ascendancy", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = TemurAscendancy;
