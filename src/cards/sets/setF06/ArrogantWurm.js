"use strict";
const Constants = require ("../../../Constants");
const ArrogantWurmBase = require("../setVMA/ArrogantWurm");

class ArrogantWurm extends ArrogantWurmBase {
  constructor (game) {
    super(game, "Arrogant Wurm", "Friday Night Magic 2006", "F06");
  }
}

module.exports = ArrogantWurm;
