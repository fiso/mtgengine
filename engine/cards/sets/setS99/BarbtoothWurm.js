"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BarbtoothWurmBase = require("../setPO2/BarbtoothWurm.js");

class BarbtoothWurm extends BarbtoothWurmBase {
  constructor(game) {
    super(game, "Barbtooth Wurm", "Starter 1999", "S99");
  }
}

module.exports = BarbtoothWurm;
