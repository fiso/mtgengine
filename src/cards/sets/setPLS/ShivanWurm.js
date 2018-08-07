"use strict";
const Constants = require ("../../../Constants");
const ShivanWurmBase = require("../setVMA/ShivanWurm");

class ShivanWurm extends ShivanWurmBase {
  constructor (game) {
    super(game, "Shivan Wurm", "Planeshift", "PLS");
  }
}

module.exports = ShivanWurm;
