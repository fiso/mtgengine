"use strict";
const Constants = require ("../../../Constants");
const PelakkaWurmBase = require("../setM19/PelakkaWurm");

class PelakkaWurm extends PelakkaWurmBase {
  constructor (game) {
    super(game, "Pelakka Wurm", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = PelakkaWurm;
