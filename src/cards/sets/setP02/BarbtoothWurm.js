"use strict";
const Constants = require ("../../../Constants");
const BarbtoothWurmBase = require("../setS99/BarbtoothWurm");

class BarbtoothWurm extends BarbtoothWurmBase {
  constructor (game) {
    super(game, "Barbtooth Wurm", "Portal Second Age", "P02");
  }
}

module.exports = BarbtoothWurm;
