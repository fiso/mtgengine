"use strict";
const Constants = require ("../../../Constants");
const SpinedWurmBase = require("../setTPR/SpinedWurm");

class SpinedWurm extends SpinedWurmBase {
  constructor (game) {
    super(game, "Spined Wurm", "Stronghold", "STH");
  }
}

module.exports = SpinedWurm;
