"use strict";
const Constants = require ("../../../Constants");
const PelakkaWurmBase = require("../setM19/PelakkaWurm");

class PelakkaWurm extends PelakkaWurmBase {
  constructor (game) {
    super(game, "Pelakka Wurm", "Modern Masters 2015", "MM2");
  }
}

module.exports = PelakkaWurm;
