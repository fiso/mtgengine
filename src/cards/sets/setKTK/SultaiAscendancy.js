"use strict";
const Constants = require ("../../../Constants");
const SultaiAscendancyBase = require("../setCPK/SultaiAscendancy");

class SultaiAscendancy extends SultaiAscendancyBase {
  constructor(game) {
    super(game, "Sultai Ascendancy", "Khans of Tarkir", "KTK");
  }
}

module.exports = SultaiAscendancy;
