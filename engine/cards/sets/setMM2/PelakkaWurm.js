"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PelakkaWurmBase = require("../setCNS/PelakkaWurm.js");

class PelakkaWurm extends PelakkaWurmBase {
  constructor(game) {
    super(game, "Pelakka Wurm", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = PelakkaWurm;
