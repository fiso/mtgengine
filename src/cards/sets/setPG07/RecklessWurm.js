"use strict";
const Constants = require ("../../../Constants");
const RecklessWurmBase = require("../setPLC/RecklessWurm");

class RecklessWurm extends RecklessWurmBase {
  constructor (game) {
    super(game, "Reckless Wurm", "Gateway 2007", "PG07");
  }
}

module.exports = RecklessWurm;
