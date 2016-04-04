"use strict";
const Constants = require ("../../../Constants");
const PelakkaWurmBase = require("../setCNS/PelakkaWurm");

class PelakkaWurm extends PelakkaWurmBase {
  constructor(game) {
    super(game, "Pelakka Wurm", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = PelakkaWurm;
