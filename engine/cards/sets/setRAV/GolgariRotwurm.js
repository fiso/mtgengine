"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GolgariRotwurmBase = require("../setDDJ/GolgariRotwurm.js");

class GolgariRotwurm extends GolgariRotwurmBase {
  constructor(game) {
    super(game, "Golgari Rotwurm", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GolgariRotwurm;
