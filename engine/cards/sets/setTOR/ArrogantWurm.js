"use strict";
const Constants = require ("../../../Constants");
const ArrogantWurmBase = require("../setpFNM/ArrogantWurm");

class ArrogantWurm extends ArrogantWurmBase {
  constructor(game) {
    super(game, "Arrogant Wurm", "Torment", "TOR");
  }
}

module.exports = ArrogantWurm;
