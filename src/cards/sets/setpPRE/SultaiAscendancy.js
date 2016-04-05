"use strict";
const Constants = require ("../../../Constants");
const SultaiAscendancyBase = require("../setCPK/SultaiAscendancy");

class SultaiAscendancy extends SultaiAscendancyBase {
  constructor(game) {
    super(game, "Sultai Ascendancy", "Prerelease Events", "pPRE");
  }
}

module.exports = SultaiAscendancy;
