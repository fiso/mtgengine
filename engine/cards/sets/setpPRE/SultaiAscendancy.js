"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SultaiAscendancyBase = require("../setCPK/SultaiAscendancy.js");

class SultaiAscendancy extends SultaiAscendancyBase {
  constructor(game) {
    super(game, "Sultai Ascendancy", "Prerelease Events", "pPRE");
  }
}

module.exports = SultaiAscendancy;
