"use strict";
const Constants = require ("../../../Constants");
const PlatedSlagwurmBase = require("../setDD3_GVL/PlatedSlagwurm");

class PlatedSlagwurm extends PlatedSlagwurmBase {
  constructor (game) {
    super(game, "Plated Slagwurm", "Mirrodin", "MRD");
  }
}

module.exports = PlatedSlagwurm;
