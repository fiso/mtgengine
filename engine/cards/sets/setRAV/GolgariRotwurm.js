"use strict";
const Constants = require ("../../../Constants");
const GolgariRotwurmBase = require("../setDDJ/GolgariRotwurm");

class GolgariRotwurm extends GolgariRotwurmBase {
  constructor(game) {
    super(game, "Golgari Rotwurm", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GolgariRotwurm;
