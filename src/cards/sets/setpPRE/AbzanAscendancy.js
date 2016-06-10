"use strict";
const Constants = require ("../../../Constants");
const AbzanAscendancyBase = require("../setKTK/AbzanAscendancy");

class AbzanAscendancy extends AbzanAscendancyBase {
  constructor (game) {
    super(game, "Abzan Ascendancy", "Prerelease Events", "pPRE");
  }
}

module.exports = AbzanAscendancy;
