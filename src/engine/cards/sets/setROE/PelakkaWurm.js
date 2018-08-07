"use strict";
const Constants = require ("../../../Constants");
const PelakkaWurmBase = require("../setM19/PelakkaWurm");

class PelakkaWurm extends PelakkaWurmBase {
  constructor (game) {
    super(game, "Pelakka Wurm", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = PelakkaWurm;
