"use strict";
const Constants = require ("../../../Constants");
const PenumbraWurmBase = require("../setVMA/PenumbraWurm");

class PenumbraWurm extends PenumbraWurmBase {
  constructor (game) {
    super(game, "Penumbra Wurm", "Apocalypse", "APC");
  }
}

module.exports = PenumbraWurm;
