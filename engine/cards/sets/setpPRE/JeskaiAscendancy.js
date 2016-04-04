"use strict";
const Constants = require ("../../../Constants");
const JeskaiAscendancyBase = require("../setKTK/JeskaiAscendancy");

class JeskaiAscendancy extends JeskaiAscendancyBase {
  constructor(game) {
    super(game, "Jeskai Ascendancy", "Prerelease Events", "pPRE");
  }
}

module.exports = JeskaiAscendancy;
