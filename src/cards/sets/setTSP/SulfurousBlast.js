"use strict";
const Constants = require ("../../../Constants");
const SulfurousBlastBase = require("../setCMA/SulfurousBlast");

class SulfurousBlast extends SulfurousBlastBase {
  constructor (game) {
    super(game, "Sulfurous Blast", "Time Spiral", "TSP");
  }
}

module.exports = SulfurousBlast;
