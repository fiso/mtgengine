"use strict";
const Constants = require ("../../../Constants");
const CharnelhoardWurmBase = require("../setC13/CharnelhoardWurm");

class CharnelhoardWurm extends CharnelhoardWurmBase {
  constructor(game) {
    super(game, "Charnelhoard Wurm", "Conflux", "CON");
  }
}

module.exports = CharnelhoardWurm;
