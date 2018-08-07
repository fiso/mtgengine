"use strict";
const Constants = require ("../../../Constants");
const SultaiAscendancyBase = require("../setCP2/SultaiAscendancy");

class SultaiAscendancy extends SultaiAscendancyBase {
  constructor (game) {
    super(game, "Sultai Ascendancy", "Magic Online Promos", "PRM");
  }
}

module.exports = SultaiAscendancy;
