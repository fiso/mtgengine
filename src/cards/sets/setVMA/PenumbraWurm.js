"use strict";
const Constants = require ("../../../Constants");
const PenumbraWurmBase = require("../setAPC/PenumbraWurm");

class PenumbraWurm extends PenumbraWurmBase {
  constructor (game) {
    super(game, "Penumbra Wurm", "Vintage Masters", "VMA");
  }
}

module.exports = PenumbraWurm;
