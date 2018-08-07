"use strict";
const Constants = require ("../../../Constants");
const ArrogantWurmBase = require("../setVMA/ArrogantWurm");

class ArrogantWurm extends ArrogantWurmBase {
  constructor (game) {
    super(game, "Arrogant Wurm", "Magic Online Promos", "PRM");
  }
}

module.exports = ArrogantWurm;
