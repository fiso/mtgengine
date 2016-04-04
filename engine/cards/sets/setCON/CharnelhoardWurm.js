"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CharnelhoardWurmBase = require("../setC13/CharnelhoardWurm.js");

class CharnelhoardWurm extends CharnelhoardWurmBase {
  constructor(game) {
    super(game, "Charnelhoard Wurm", "Conflux", "CON");
  }
}

module.exports = CharnelhoardWurm;
