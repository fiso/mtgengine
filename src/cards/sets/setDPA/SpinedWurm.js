"use strict";
const Constants = require ("../../../Constants");
const SpinedWurmBase = require("../setTPR/SpinedWurm");

class SpinedWurm extends SpinedWurmBase {
  constructor (game) {
    super(game, "Spined Wurm", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = SpinedWurm;
