"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AbzanAscendancyBase = require("../setKTK/AbzanAscendancy.js");

class AbzanAscendancy extends AbzanAscendancyBase {
  constructor(game) {
    super(game, "Abzan Ascendancy", "Prerelease Events", "pPRE");
  }
}

module.exports = AbzanAscendancy;
