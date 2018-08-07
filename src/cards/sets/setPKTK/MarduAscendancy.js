"use strict";
const Constants = require ("../../../Constants");
const MarduAscendancyBase = require("../setKTK/MarduAscendancy");

class MarduAscendancy extends MarduAscendancyBase {
  constructor (game) {
    super(game, "Mardu Ascendancy", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = MarduAscendancy;
