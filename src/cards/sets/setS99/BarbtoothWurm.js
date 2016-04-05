"use strict";
const Constants = require ("../../../Constants");
const BarbtoothWurmBase = require("../setPO2/BarbtoothWurm");

class BarbtoothWurm extends BarbtoothWurmBase {
  constructor(game) {
    super(game, "Barbtooth Wurm", "Starter 1999", "S99");
  }
}

module.exports = BarbtoothWurm;
