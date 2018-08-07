"use strict";
const Constants = require ("../../../Constants");
const CharnelhoardWurmBase = require("../setC18/CharnelhoardWurm");

class CharnelhoardWurm extends CharnelhoardWurmBase {
  constructor (game) {
    super(game, "Charnelhoard Wurm", "Commander 2013", "C13");
  }
}

module.exports = CharnelhoardWurm;
