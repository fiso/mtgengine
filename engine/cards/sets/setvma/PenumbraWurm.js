"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PenumbraWurmBase = require("../setAPC/PenumbraWurm.js");

class PenumbraWurm extends PenumbraWurmBase {
  constructor(game) {
    super(game, "Penumbra Wurm", "Vintage Masters", "VMA");
  }
}

module.exports = PenumbraWurm;
