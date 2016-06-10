"use strict";
const Constants = require ("../../../Constants");
const DirtcowlWurmBase = require("../setBRB/DirtcowlWurm");

class DirtcowlWurm extends DirtcowlWurmBase {
  constructor (game) {
    super(game, "Dirtcowl Wurm", "Prerelease Events", "pPRE");
  }
}

module.exports = DirtcowlWurm;
