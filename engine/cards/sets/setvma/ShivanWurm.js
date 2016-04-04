"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShivanWurmBase = require("../setPLS/ShivanWurm.js");

class ShivanWurm extends ShivanWurmBase {
  constructor(game) {
    super(game, "Shivan Wurm", "Vintage Masters", "VMA");
  }
}

module.exports = ShivanWurm;
