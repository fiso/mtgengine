"use strict";
const Constants = require ("../../../Constants");
const AbzanAscendancyBase = require("../setKTK/AbzanAscendancy");

class AbzanAscendancy extends AbzanAscendancyBase {
  constructor (game) {
    super(game, "Abzan Ascendancy", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = AbzanAscendancy;
