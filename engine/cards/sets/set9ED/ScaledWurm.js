"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScaledWurmBase = require("../setBRB/ScaledWurm.js");

class ScaledWurm extends ScaledWurmBase {
  constructor(game) {
    super(game, "Scaled Wurm", "Ninth Edition", "9ED");
  }
}

module.exports = ScaledWurm;
