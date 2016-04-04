"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EnlistedWurmBase = require("../setARB/EnlistedWurm.js");

class EnlistedWurm extends EnlistedWurmBase {
  constructor(game) {
    super(game, "Enlisted Wurm", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = EnlistedWurm;
