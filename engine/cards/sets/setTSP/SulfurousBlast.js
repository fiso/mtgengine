"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SulfurousBlastBase = require("../setCMD/SulfurousBlast.js");

class SulfurousBlast extends SulfurousBlastBase {
  constructor(game) {
    super(game, "Sulfurous Blast", "Time Spiral", "TSP");
  }
}

module.exports = SulfurousBlast;
