"use strict";
const Constants = require ("../../../Constants");
const SultaiAscendancyBase = require("../setCP2/SultaiAscendancy");

class SultaiAscendancy extends SultaiAscendancyBase {
  constructor (game) {
    super(game, "Sultai Ascendancy", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = SultaiAscendancy;
