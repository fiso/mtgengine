"use strict";
const Constants = require ("../../../Constants");
const ShivanWurmBase = require("../setPLS/ShivanWurm");

class ShivanWurm extends ShivanWurmBase {
  constructor(game) {
    super(game, "Shivan Wurm", "Vintage Masters", "VMA");
  }
}

module.exports = ShivanWurm;
