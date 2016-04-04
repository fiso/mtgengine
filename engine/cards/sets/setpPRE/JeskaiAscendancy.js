"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JeskaiAscendancyBase = require("../setKTK/JeskaiAscendancy.js");

class JeskaiAscendancy extends JeskaiAscendancyBase {
  constructor(game) {
    super(game, "Jeskai Ascendancy", "Prerelease Events", "pPRE");
  }
}

module.exports = JeskaiAscendancy;
