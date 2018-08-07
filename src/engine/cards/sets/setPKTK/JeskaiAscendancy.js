"use strict";
const Constants = require ("../../../Constants");
const JeskaiAscendancyBase = require("../setKTK/JeskaiAscendancy");

class JeskaiAscendancy extends JeskaiAscendancyBase {
  constructor (game) {
    super(game, "Jeskai Ascendancy", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = JeskaiAscendancy;
